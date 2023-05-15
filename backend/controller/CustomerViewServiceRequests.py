from sqlalchemy.orm import sessionmaker
from database import Base, engine
from models import ServiceRequest, ProfessionalServiceRequest, ServiceType Transaction

Session = sessionmaker(bind=engine)
session = Session()

def CustomerViewServiceRequests(customer_id):

    requests = session.query(ServiceRequest).filter_by(client_id=customer_id).order_by(ServiceRequest.request_time.desc())

    #if there are no requests for this customer return nothing to display
    if not request:
        return False

    #each request will have the same index across all lists
    request_type = []
    request_time = []
    request_desc = []
    request_cost = []
    request_accepted = []

    for request in requests:
        request_type.append(session.query(ServiceType.service_type_name).join(ServiceRequest).filter(ServiceRequest.id==request_id).scalar())
        request_time.append(request.request_time)
        request_desc.append(request.description)
    
        professional_request = session.query(ProfessionalServiceRequest).filter_by(service_request_id=request.id)

        if professional_request:
            request_cost.append(professional_request.cost)
            request_accepted.append(professional_request.acceptance)
        else:
            request_cost.append(0)
            request_accepted.append(0)

    return True, request_type, request_time_, request_desc, request_cost, request_accepted
