class ItemDto:
    def __init__(self, itemName: str, itemSize: int):
        self._itemName = itemName
        self._itemSize = itemSize

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
        del self._itemName

    @property
    def itemSize(self):
        return self._itemSize

    @itemSize.setter
    def itemSize(self, newItemSize: str):
        if newItemSize > 0:
            self._itemSize = newItemSize
        else:
            raise ValueError(f"{self._itemName} is not big enough")

    @itemSize.deleter
    def itemSize(self):
        del self._itemSize
