document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.customer-table');
  
    if (table) {
      table.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-deactivate')) {
          const row = e.target.closest('tr');
          row.classList.toggle('inactive');
          e.target.textContent = row.classList.contains('inactive') ? 'Ativar' : 'Desativar';
        }
  
        if (e.target.classList.contains('btn-edit')) {
          const customerId = e.target.dataset.id;
          window.location.href = `customer_detail.html?id=${customerId}`;
        }
      });
    }
  
    const addBtn = document.querySelector('.add-customer-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        window.location.href = 'customer_detail.html';
      });
    }

    const toggleButton = card.querySelector('.btn-toggle');
const icon = toggleButton.querySelector('i');

if (card.classList.contains('desativado')) {
  icon.classList.remove('fa-toggle-off');
  icon.classList.add('fa-toggle-on');
  toggleButton.title = 'Ativar';
} else {
  icon.classList.remove('fa-toggle-on');
  icon.classList.add('fa-toggle-off');
  toggleButton.title = 'Desativar';
}
  });
  