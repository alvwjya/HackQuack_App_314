const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

// Route handler for updating professional information
router.put("/update-professional/:id", async function (req, res, next) {

  // Destructure and extract necessary data from request body
  const { 
    first_name, 
    last_name, 
    abn, 
    password, 
    suburb, 
    state, 
    postcode, 
    card_number, 
    card_security_num, 
    card_expiry_date, 
    service_type_id 
  } = req.body;

  // Validate inputs: all fields are required
  if (!first_name || !last_name || !abn || !password || !suburb || !state || !postcode || !card_number || !card_security_num || !card_expiry_date || !service_type_id) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Parse and validate the id parameter
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid professional id" });
  }

  try {
    // Find the professional by id
    const professional = await prisma.professional.findUnique({
      where: { id: id },
    });

    // If the professional does not exist, return an error
    if (!professional) {
      return res.status(404).json({ status: "error", message: "Professional not found" });
    }

    // Check for failed update attempts
    const now = new Date();

    // Reset failed update count if it's been more than 10 minutes
    if (!professional.failed_update_timestamp || now - new Date(professional.failed_update_timestamp) > 10 * 60 * 1000) {
      professional.failed_update_count = 0;
    }

    // Increase the count for failed updates
    professional.failed_update_count += 1;
    professional.failed_update_timestamp = now;

    // If there were more than 3 failed attempts, return an error
    if (professional.failed_update_count >= 3) {
      await prisma.professional.update({
        where: { id: id },
        data: {
          failed_update_count: professional.failed_update_count,
          failed_update_timestamp: professional.failed_update_timestamp,
        },
      });

      return res.status(400).json({
        status: "error",
        message: "You have failed to update your profile 3 times. Please try again after 10 minutes.",
      });
    }

    // If all checks pass, update the professional's data
    const updatedProfessional = await prisma.professional.update({
      where: { id: id },
      data: {
        first_name: first_name,
        last_name: last_name,
        abn: abn,
        password: password,
        suburb: suburb,
        state: state,
        postcode: postcode,
        card_number: card_number,
        card_security_num: card_security_num,
        card_expiry_date: new Date(card_expiry_date),
        service_type_id: service_type_id,
        failed_update_count: professional.failed_update_count,
        failed_update_timestamp: professional.failed_update_timestamp,
      },
    });

    // Return the updated professional data
    return res.status(200).json(updatedProfessional);
  } catch (error) {
    // If any error happens, pass it to the error handling middleware
    next(error);
 }
});

// Export the router
module.exports = router
