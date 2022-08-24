class BagDto:
    def __init__(self,
                 bagName: str,
                 capacity: int,
                 style: str,
                 notes: str = ""):
        self.bagName = bagName
        self.capacity = capacity
        self.style = style
        self.notes = notes

    @property
    def bagName_prop(self):
        return self.bagName

    @bagName_prop.setter
    def bagName_prop(self, newBagName: str):
        if len(newBagName) > 1:
            self.bagName = newBagName
        else:
            raise ValueError(f"{newBagName} is not a valid name for your bag")

    @bagName_prop.deleter
    def bagName_prop(self):
        del self.bagName

    @property
    def capacity_prop(self):
        return self.capacity

    @capacity_prop.setter
    def capacity_prop(self, newCapacity: int):
        if newCapacity > 1:
            self.capacity = newCapacity
        else:
            raise ValueError(f"{newCapacity} is not a valid size for your bag")

    @capacity_prop.deleter
    def capacity_prop(self):
        del self.style

    @property
    def style_prop(self):
        return self.style

    @style_prop.setter
    def style_prop(self, newStyle: str):
        if newStyle:
            self.style = newStyle
        else:
            raise ValueError(f"{newStyle} is not a valid style for your bag")

    @style_prop.deleter
    def style_prop(self):
        del self.style

    @property
    def notes_prop(self):
        return self.notes

    @notes_prop.setter
    def notes_prop(self, newNotes: str):
        if len(newNotes) > 1:
            self.notes = newNotes
        else:
            raise ValueError((f"{newNotes} is not a valid notes "
                             "for your bag"))

    @notes_prop.deleter
    def notes_prop(self):
        del self.notes
