class BagDto:
    def __init__(self,
                 bagName: str,
                 capacity: int,
                 style: str,
                 notes: str = ""):
        self._bagName = bagName
        self._capacity = capacity
        self._style = style
        self._notes = notes

    @property
    def bagName(self):
        return self._bagName

    @bagName.setter
    def bagName(self, newBagName):
        if len(newBagName) > 1 and newBagName is str:
            self._bagName = newBagName
        else:
            raise ValueError(f"{newBagName} is not a valid name for your bag")

    @bagName.deleter
    def bagName(self):
        del self._bagName

    @property
    def capacity(self):
        return self._capacity

    @capacity.setter
    def capacity(self, newCapacity):
        if newCapacity > 1 and newCapacity is int:
            self._capacity = newCapacity
        else:
            raise ValueError(f"{newCapacity} is not a valid size for your bag")

    @capacity.deleter
    def capacity(self):
        del self._style

    @property
    def style(self):
        return self._style

    @style.setter
    def style(self, newStyle):
        if newStyle:
            self._style = newStyle
        else:
            raise ValueError(f"{newStyle} is not a valid style for your bag")

    @style.deleter
    def style(self):
        del self._style

    @property
    def notes(self):
        return self._notes

    @notes.setter
    def notes(self, newNotes):
        if len(newNotes) > 1 and newNotes is str:
            self._notes = newNotes
        else:
            raise ValueError((f"{newNotes} is not a valid notes "
                             "for your bag"))

    @notes.deleter
    def notes(self):
        del self._notes
