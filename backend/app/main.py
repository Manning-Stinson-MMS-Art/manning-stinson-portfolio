from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.logger import setup_logger
from app.api.v1.endpoints import portfolio
from app.core.db_connection import engine, Base

logger = setup_logger()
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Portfolio API",
    description="Portfolio management system",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    logger.info("Starting Portfolio API")

app.include_router(portfolio.router, prefix="/api/v1", tags=["portfolio"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)