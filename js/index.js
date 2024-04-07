async function getContacts() {
    const res = await fetch('public/data/contacts.json')
    const contacts = await res.json()
    console.log(contacts)
    renderContacts(contacts)
}

function renderContacts(contacts) {
    const contactsDiv = document.getElementById('contacts')
    contactsDiv.innerHTML = ''
    
    contacts.forEach(contact => {
        const contactTemplate = `
        <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${contact.name}</h5>
        </div>
        <small>${contact.email}</small>
        </div>
        `
        contactsDiv.innerHTML += contactTemplate
    })
}

getContacts()