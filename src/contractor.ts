
export const startModuleContractor = () => {
  const addContractor: HTMLButtonElement = (<HTMLButtonElement>document.getElementById('add-contractor'));
  addContractor?.addEventListener('click', event => {
    const modalAddContractor = document.getElementById('modal-add-contractor');
    const cardContractorAdd = document.getElementById('card-contractor-add');

    modalAddContractor?.classList.toggle('hidden');
    cardContractorAdd?.classList.toggle('hidden');
  });
}