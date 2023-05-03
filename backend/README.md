# CSIT314 Backend

## Initial Setup
1. Install [Python 3.70](https://www.python.org/downloads/release/python-370/) preferably or anything version v3.0 - v3.80 [how-to](https://youtu.be/VWgs_iTojoA)
2. Install [MySQL Installer](https://dev.mysql.com/downloads/installer/)
3. Follow this [how-to](https://youtu.be/2om3byn2lxs) to install MySQL
4. Follow this [how-to](https://youtu.be/x_ez4IlSGOE) to create new schema for our database
5. Install [GitHub Desktop](https://desktop.github.com/)
6. Clone the repository using GitHub Desktop [how-to](https://youtu.be/PoZNIbs_wx8)
7. Put this URL as the repository URL
   ```
   https://github.com/MadMonkMash/CSIT314-LAB-PROJECT.git
   ```
8. Clone the repository and use branch `Back-End-Branch`
9. Go to the backend directory using your terminal
   ```
   cd backend
   ```
10. run this in your terminal:
      ```
      pip install -r requirements.txt
      ```
11. Make a copy of `.env.sample` file in the root backend directory, rename it to `.env`
12.  Change the `.env` variables according to your settings
   ```
      DATABASE_USERNAME=<INSERT THE DATABASE USERNAME HERE>
      DATABASE_PASSWORD=<THE DATABASE PASSWORD HERE>
   ```
13.  Go to `__main__.py` to run the code
14.  Remember to push every changes [how-to](https://youtu.be/8Dd7KRpKeaE)
