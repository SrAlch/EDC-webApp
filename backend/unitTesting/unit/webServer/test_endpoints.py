from app import app
import pytest
from flask import testing


@pytest.fixture
def client_instance():
    client = app.test_client()
    return client


@pytest.fixture
def client_instance_auth(mocker):
    mocker.patch("flask_jwt_extended.view_decorators.verify_jwt_in_request")
    client = app.test_client()
    return client


def test_bagGet_endpoint(client_instance: testing.FlaskClient):
    ownerId = "328c141b-20d8-11ed-859d-50e085f3ef4d"
    response = client_instance.get(f"/bags/{ownerId}")
    assert response.status_code == 401


def test_bagGet_endpoint_auth(client_instance_auth: testing.FlaskClient):
    ownerId = "328c141b-20d8-11ed-859d-50e085f3ef4d-44"
    response = client_instance_auth.get(f"/bags/{ownerId}")
    assert response.status_code == 200

