from sqlalchemy.orm import sessionmaker
from database import Base, engine
from models import ServiceRequest, ProfessionalServiceRequest, ServiceType Transaction, Rating

Session = sessionmaker(bind=engine)
session = Session()

def CustomerViewCurrentActiveRequest(customer_id):

    #assuming customers can only have one open request the active request will be the latest
    request = session.query(ServiceRequest).filter_by(client_id=customer_id).order_by(ServiceRequest.request_time.desc()).first()

    #if there are no requests for this customer return nothing to display
    if not request:
        return False

    #if the latest request has a rating it is not active, return nothing to display
    rated = session.query(exists().where(and_(
        Rating.transaction_id == Transaction.id,
        Transaction.service_request_id == ServiceRequest.id,
        ServiceRequest.id == request.id)
        )).scalar()
    if rated:
        return False

    request_type = session.query(ServiceType.service_type_name).join(ServiceRequest).filter(ServiceRequest.id==request_id).scalar()
    request_time = request.request_time
    request_desc = request.description
    
    professional_request = session.query(ProfessionalServiceRequest).filter_by(service_request_id=request.id)

    if professional_request:
        request_cost = professional_request.cost
        request_accepted = professional_request.acceptance
    else:
        request_cost = 0
        request_accepted = 0

    return True, request_type, request_time, request_desc, request_cost, request_accepted
