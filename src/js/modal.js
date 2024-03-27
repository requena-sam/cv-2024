export const modal = {
    contactFormElement: document.getElementById('contact'),
    closeFormElement: document.getElementById('closeContact'),
    openContactElement: document.querySelector('.btn-contact'),
    init() {
        this.contactFormElement.classList.add('hidden');
        this.openForm();
        this.closeForm()
    },
    openForm() {
        this.openContactElement.addEventListener('click', (e) => {
            this.openContactElement.classList.add('hidden')
            this.contactFormElement.classList.remove('hidden');
            this.contactFormElement.classList.add('fixedContact');
            document.body.classList.add('no-scroll')
        })
    },
    closeForm(){
        this.closeFormElement.addEventListener('click', (e)=>{
            this.contactFormElement.classList.remove('fixedContact');
            this.contactFormElement.classList.add('hidden');
            this.openContactElement.classList.remove('hidden');
            document.body.classList.remove('no-scroll')


        })
    }

}