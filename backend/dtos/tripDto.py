from dtos.bagDto import BagDto
from dtos.itemDto import ItemDto
from typing import List

# Data transfer object to map the information from the database and transfer
# it to React or to request it from React and inject it in mongoDB


class TripDto:
    def __init__(self,
                 tripName: str,
                 date: str,
                 destination: str,
                 backpacks: List[BagDto],
                 items: List[ItemDto]):
        self.tripName = tripName
        self.date = date
        self.destination = destination
        self.backpacks = backpacks
        self.items = items

    @property
    def tripName_prop(self):
        return self.tripName

    @tripName_prop.setter
    def tripName_prop(self, newtripName: str):
        if len(newtripName) > 0:
            self.tripName = newtripName
        else:
            raise ValueError((f"{newtripName} is not a valid name for your"
                             " trip"))

    @tripName_prop.deleter
    def tripName_prop(self):
        del self.tripName

    @property
    def date_prop(self):
        return self.date

    @date_prop.setter
    def date_prop(self, newDate: str):
        if newDate:
            self.date = newDate
        else:
            raise ValueError((f"{newDate} is not a valid date for your"
                             " trip"))

    @date_prop.deleter
    def date_prop(self):
        del self.date

    @property
    def destination_prop(self):
        return self.destination

    @destination_prop.setter
    def destination_prop(self, newdestination: str):
        if len(newdestination) > 0:
            self.destination = newdestination
        else:
            raise ValueError((f"{newdestination} is not a valid destination "
                             "for your trip"))

    @destination_prop.deleter
    def destination_prop(self):
        del self.destination

    @property
    def backpacks_prop(self):
        return self.backpacks

    @backpacks_prop.setter
    def backpacks_prop(self, newBackpacks: List[BagDto]):
        if len(newBackpacks) > 0:
            self.backpacks = newBackpacks

    @backpacks_prop.deleter
    def backpacks_prop(self):
        del self.backpacks

    @property
    def items_prop(self):
        return self.items

    @items_prop.setter
    def items_prop(self, newItems: List[ItemDto]):
        if len(newItems) > 0:
            self.items = newItems
        else:
            raise ValueError((f"{newItems} is not a valid item for your"
                             " trip"))

    @items_prop.deleter
    def items_prop(self):
        del self.items
