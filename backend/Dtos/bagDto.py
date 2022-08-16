class BagDto:
    def __init__(self, name: str, sizeL: int, description: str = ""):
        self._name = name
        self._sizeL = sizeL
        self._description = description

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, newName):
        if len(newName) > 1 and newName is str:
            self._name = newName
        else:
            raise ValueError(f"{newName} is not a valid name for your bag")

    @name.deleter
    def name(self):
        del self._name

    @property
    def sizeL(self):
        return self._sizeL

    @sizeL.setter
    def sizeL(self, newSizeL):
        if newSizeL > 1 and newSizeL is int:
            self._sizeL = newSizeL
        else:
            raise ValueError(f"{newSizeL} is not a valid size for your bag")

    @sizeL.deleter
    def sizeL(self):
        del self._sizeL

    @property
    def description(self):
        return self._description

    @description.setter
    def description(self, newDescription):
        if len(newDescription) > 1 and newDescription is str:
            self._description = newDescription
        else:
            raise ValueError((f"{newDescription} is not a valid description "
                             "for your bag"))

    @description.deleter
    def description(self):
        del self._description
