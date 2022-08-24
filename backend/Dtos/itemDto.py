class ItemDto:
    def __init__(self,
                 itemName: str,
                 itemAmount: int,
                 notes: str = "",
                 category: str = ""):
        self.itemName = itemName
        self.itemAmount = itemAmount
        self.notes = notes
        self.category = category

    @property
    def itemName(self):
        return self.itemName

    @itemName.setter
    def itemName(self, newItemName: str):
        if len(newItemName) > 0:
            self.itemName = newItemName
        else:
            raise ValueError(f"{newItemName} is not long enough")

    @itemName.deleter
    def itemName(self):
        del self.itemAmount

    @property
    def itemAmount(self):
        return self.itemAmount

    @itemAmount.setter
    def itemAmount(self, newItemAmount: int):
        if newItemAmount > 0:
            self.itemAmount = newItemAmount
        else:
            raise ValueError(f"{newItemAmount} doesn't have enough number")

    @itemAmount.deleter
    def itemAmount(self):
        del self.itemAmount

    @property
    def notes(self):
        return self.notes

    @notes.setter
    def notes(self, newNotes: str):
        self.notes = newNotes

    @notes.deleter
    def notes(self):
        del self.notes

    @property
    def category(self):
        return self.category

    @category.setter
    def category(self, newCategory: str):
        self.category = newCategory

    @category.deleter
    def category(self):
        del self.category
