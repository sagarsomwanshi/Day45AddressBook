
window.addEventListener('DOMContentLoaded', (event) => {
    var contactList = JSON.parse(localStorage.getItem('AddressBookList'));
    contactList = getContactDataFromStorage();
    createInnerHtml();
});

const getContactDataFromStorage = () => {
    return localStorage.getItem('ContactList') ?
                        JSON.parse(localStorage.getItem('ContactList')) : [];
}

const createInnerHtml = () => {
    var contactList = JSON.parse(localStorage.getItem('AddressBookList'));
    const header = "<th></th><th>FullName</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th></th>";
    let innerHtml = `${header}`;
    contactList.forEach(e => {


        innerHtml = `${innerHtml} 
        <tr>
        <td></td>
        <td>${e._name}</td>
        <td>${e._address}</td>
        <td>${e._city}</td>
        <td>${e._state}</td>
        <td>${e._zip}</td>
        <td>${e._phone}</td>
        <td>
            <img id="${e._id}" onclick="remove(this)" alt="delete"
            src="assets/icons/delete-black-18dp.svg">
            
        </td>    
    </tr>
    `;
    });
    document.querySelector('#display').innerHTML = innerHtml;
}
const remove = (node) => {

    var contactList = JSON.parse(localStorage.getItem('AddressBookList'));
    let contact = contactList.find(cdata => cdata._id == node._id);
    if (!contact) return;
    const index = contactList.map(cdata => cdata._id).indexOf(contact._id);
    contactList.splice(index, 1);
    localStorage.setItem("AddressBookList", JSON.stringify(contactList));
    createInnerHtml();
}

