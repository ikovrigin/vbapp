import mangum
from fastapi import FastAPI
from models import Base
from models.database import engine
from routes import users, items, token

Base.metadata.create_all(bind=engine)

app = FastAPI()
handler = mangum.Mangum(app, api_gateway_base_path='/api')

app.include_router(token.router)
app.include_router(users.router)
app.include_router(items.router)
