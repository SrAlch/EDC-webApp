class ItemDto:
    def __init__(self,
                 itemName: str,
                 itemAmount: int,
                 notes: str = "",
                 category: str = ""):
        self._itemName = itemName
        self._itemAmount = itemAmount
        self._notes = notes
        self._category = category

    @property
    def itemName(self):
        return self._itemName

    @itemName.setter
    def itemName(self, newItemName: str):
        if len(newItemName) > 0:
            self._itemName = newItemName
        else:
            raise ValueError(f"{newItemName} is not long enough")

    @itemName.deleter
    def itemName(self):
        del self._itemAmount

    @property
    def itemAmount(self):
        return self._itemAmount

    @itemAmount.setter
    def itemAmount(self, newItemAmount: int):
        if newItemAmount > 0:
            self._itemAmount = newItemAmount
        else:
            raise ValueError(f"{newItemAmount} doesn't have enough number")

    @itemAmount.deleter
    def itemAmount(self):
        del self._itemAmount

    @property
    def notes(self):
        return self._notes

    @notes.setter
    def notes(self, newNotes: str):
        self._notes = newNotes

    @notes.deleter
    def notes(self):
        del self._notes

    @property
    def category(self):
        return self._category

    @category.setter
    def category(self, newCategory: str):
        self._category = newCategory

    @category.deleter
    def category(self):
        del self._category
