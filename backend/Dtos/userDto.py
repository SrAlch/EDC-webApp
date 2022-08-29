# Data transfer object to map the information from the database and transfer
# it to React or to request it from React and inject it in mongoDB

class UserDto:
    def __init__(self,
                 _id: str,
                 userName: str,
                 email: str,
                 password: str,
                 phone: str,
                 homeCountry: str):
        self._id = _id
        self.userName = userName
        self.email = email
        self.password = password
        self.phone = phone
        self.homeCountry = homeCountry

    @property
    def id_prop(self):
        return self._id

    @id_prop.deleter
    def id_prop(self):
        del self._id

    @property
    def userName_prop(self):
        return self.userName

    @userName_prop.setter
    def userName_prop(self, newUserName: int):
        self.userName = newUserName

    @userName_prop.deleter
    def userName_prop(self):
        del self.userName

    @property
    def email_prop(self):
        return self.email

    @email_prop.deleter
    def email_prop(self):
        del self.email

    @property
    def password_prop(self):
        return self.password

    @password_prop.setter
    def password_prop(self, newPassword: str):
        self.password = newPassword

    @password_prop.deleter
    def password_prop(self):
        del self.password

    @property
    def phone_prop(self):
        return self.phone

    @phone_prop.setter
    def phone_prop(self, newPhone: str):
        self.phone = newPhone

    @phone_prop.deleter
    def phone_prop(self):
        del self.phone

    @property
    def homeCountry_prop(self):
        return self.homeCountry

    @homeCountry_prop.setter
    def homeCountry_prop(self, newHomeCountry: str):
        self.homeCountry = newHomeCountry

    @homeCountry_prop.deleter
    def homeCountry_prop(self):
        del self.homeCountry
