from app import app
from dbCreation import MONGO
import pytest
import pymongo
import dbFunct
from dtos.userDto import UserDto
from dtos.itemDto import ItemDto
from dtos.bagDto import BagDto
from dtos.tripDto import TripDto


@pytest.fixture
def user_mock_data():
    userMockData = UserDto(
        _id="d2fb250c-2730-11ed-a261-0242ac120003",
        userName="Test Dummy",
        email="dummy@test.com",
        password="Test12345",
        phone="012345678",
        homeCountry="Ireland")
    return userMockData


@pytest.fixture
def item_mock_data():
    itemMockData = ItemDto(
        itemName="Test Bottle",
        itemAmount=1,
        notes="Test Notes",
        category="Test Category"
        )
    return itemMockData


@pytest.fixture
def bag_mock_data():
    bagMockData = BagDto(
            bagName="Test Backpack",
            capacity=35,
            style="Test Style",
            notes="Test Notes"
        )
    return bagMockData


@pytest.fixture
def trip_mock_data():
    bagMockData = BagDto(
            bagName="Test Backpack",
            capacity=35,
            style="Test Style",
            notes="Test Notes"
        )

    itemMockData = ItemDto(
        itemName="Test Bottle",
        itemAmount=1,
        notes="Test Notes",
        category="Test Category"
        )

    tripMockData = TripDto(
            tripName="Test Trip",
            date="01/01/1994",
            destination="Test Destination",
            backpacks=bagMockData.__dict__,
            items=itemMockData.__dict__
        )
    return tripMockData


def test_UserFuncts(user_mock_data: UserDto):
    addResult = dbFunct.addNewUser(user_mock_data, MONGO)
    getResult = dbFunct.getUser(user_mock_data.email, MONGO)
    getBadResult = dbFunct.getUser("fail@test.com", MONGO)
    deleteResult = dbFunct.deleteUser(user_mock_data._id, MONGO)
    assert addResult is True
    assert type(getResult) == dict
    assert getBadResult is False
    assert deleteResult == 1


def test_ItemFuncts(item_mock_data: ItemDto, user_mock_data: UserDto):
    addResult = dbFunct.addNewItem(user_mock_data._id,
                                   item_mock_data,
                                   "items",
                                   MONGO)
    getResult = dbFunct.getItems(user_mock_data._id, MONGO)
    itemId = f"{user_mock_data._id}-{item_mock_data.itemName}"
    deleteResult = dbFunct.deleteItem(itemId, MONGO)
    assert addResult is True
    assert type(getResult) == pymongo.cursor.Cursor
    assert deleteResult == 1


def test_BagFuncts(bag_mock_data: BagDto, user_mock_data: UserDto):
    addResult = dbFunct.addNewBag(user_mock_data._id,
                                  bag_mock_data,
                                  "bags",
                                  MONGO)
    getResult = dbFunct.getBags(user_mock_data._id, MONGO)
    bagId = f"{user_mock_data._id}-{bag_mock_data.bagName}"
    deleteResult = dbFunct.deleteBag(bagId, MONGO)
    assert addResult is True
    assert type(getResult) == pymongo.cursor.Cursor
    assert deleteResult == 1


def test_TripFuncts(trip_mock_data: TripDto, user_mock_data: UserDto):
    addResult = dbFunct.addNewTrip(user_mock_data._id,
                                   trip_mock_data,
                                   "trips",
                                   MONGO)
    getResult = dbFunct.getTrips(user_mock_data._id, MONGO)
    tripId = f"{user_mock_data._id}-{trip_mock_data.tripName}"
    deleteResult = dbFunct.deleteTrip(tripId, MONGO)
    assert addResult is True
    assert type(getResult) == pymongo.cursor.Cursor
    assert deleteResult == 1
