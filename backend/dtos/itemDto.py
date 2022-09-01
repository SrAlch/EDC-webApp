# Data transfer object to map the information from the database and transfer
# it to React or to request it from React and inject it in mongoDB

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
    def itemName_prop(self):
        return self.itemName

    @itemName_prop.setter
    def itemName_prop(self, newItemName: str):
        if len(newItemName) > 0:
            self.itemName = newItemName
        else:
            raise ValueError(f"{newItemName} is not long enough")

    @itemName_prop.deleter
    def itemName_prop(self):
        del self.itemAmount

    @property
    def itemAmount_prop(self):
        return self.itemAmount

    @itemAmount_prop.setter
    def itemAmount_prop(self, newItemAmount: int):
        if newItemAmount > 0:
            self.itemAmount = newItemAmount
        else:
            raise ValueError(f"{newItemAmount} doesn't have enough number")

    @itemAmount_prop.deleter
    def itemAmount_prop(self):
        del self.itemAmount

    @property
    def notes_prop(self):
        return self.notes

    @notes_prop.setter
    def notes_prop(self, newNotes: str):
        self.notes = newNotes

    @notes_prop.deleter
    def notes_prop(self):
        del self.notes

    @property
    def category_prop(self):
        return self.category

    @category_prop.setter
    def category_prop(self, newCategory: str):
        self.category = newCategory

    @category_prop.deleter
    def category_prop(self):
        del self.category
