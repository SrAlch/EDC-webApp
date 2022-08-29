from datetime import date as dateFormat
from dtos.bagDto import BagDto
from dtos.itemDto import ItemDto
from typing import List

# Data transfer object to map the information from the database and transfer
# it to React or to request it from React and inject it in mongoDB


class TripDto:
    def __init__(self,
                 tripName: str,
                 date: dateFormat,
                 destination: str,
                 backpacks: List[str],
                 items: List[str]):
        self._location = tripName
        self._date = date
        self._destination = destination
        self._backpacks = backpacks
        self._items = items

    @property
    def tripName(self):
        return self._tripName

    @tripName.setter
    def tripName(self, newtripName: str):
        if len(newtripName) > 0:
            self._tripName = newtripName
        else:
            raise ValueError((f"{newtripName} is not a valid name for your"
                             " trip"))

    @tripName.deleter
    def tripName(self):
        del self._tripName

    @property
    def date(self):
        return self._date

    @date.setter
    def date(self, newDate: dateFormat):
        if newDate:
            self._date = newDate
        else:
            raise ValueError((f"{newDate} is not a valid date for your"
                             " trip"))

    @date.deleter
    def date(self):
        del self._date

    @property
    def destination(self):
        return self._destination

    @destination.setter
    def destination(self, newdestination: str):
        if len(newdestination) > 0:
            self._destination = newdestination
        else:
            raise ValueError((f"{newdestination} is not a valid destination "
                             "for your trip"))

    @destination.deleter
    def destination(self):
        del self._destination

    @property
    def backpacks(self):
        return self._backpacks

    @backpacks.setter
    def backpacks(self, newBackpacks: List[BagDto]):
        if len(newBackpacks) > 0:
            self._backpacks = newBackpacks

    @backpacks.deleter
    def backpacks(self):
        del self._backpacks

    @property
    def items(self):
        return self._items

    @items.setter
    def items(self, newItems: List[ItemDto]):
        if len(newItems) > 0:
            self._items = newItems
        else:
            raise ValueError((f"{newItems} is not a valid item for your"
                             " trip"))

    @items.deleter
    def items(self):
        del self._items
