from bagDto import BagDto
from itemDto import ItemDto
from typing import List


class TripDto:
    def __init__(self,
                 location: str,
                 backpacks: List[BagDto],
                 items: List[ItemDto],
                 durantion: int):
        self._location = location
        self._backpacks = backpacks
        self._items = items
        self._durantion = durantion

    @property
    def location(self):
        return self._location

    @location.setter
    def location(self, newLocation: str):
        if len(newLocation) > 0:
            self._location = newLocation
        else:
            raise ValueError((f"{newLocation} is not a valid location for your"
                             " trip"))

    @location.deleter
    def location(self):
        del self._location

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

    @property
    def duration(self):
        return self._duration

    @duration.setter
    def duration(self, newDuration: int):
        if newDuration > 0:
            self._duration = newDuration
        else:
            raise ValueError((f"{newDuration} is not a valid duration for your"
                             " trip"))

    @duration.deleter
    def duration(self):
        del self._duration
