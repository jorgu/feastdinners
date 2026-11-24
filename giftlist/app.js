const listContainer = document.querySelector('#lists');
const searchInput = document.querySelector('#search');
const emptyState = document.querySelector('#empty-state');
const filterButtons = [...document.querySelectorAll('.filter-button')];

let activeFilter = 'Alla';

function createCell(className, text) {
  const cell = document.createElement('div');
  cell.className = className;
  cell.textContent = text || '';
  return cell;
}

function createStoreCell(item) {
  const cell = document.createElement('div');
  cell.className = 'store-cell';

  if (item.länk && /^https?:\/\//i.test(item.länk)) {
    const link = document.createElement('a');
    link.href = item.länk;
    link.textContent = item.länktext || 'Öppna länk';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    cell.append(link);
  } else if (item.länktext || item.länk) {
    cell.textContent = item.länktext || item.länk;
  }

  return cell;
}

function render() {
  const query = searchInput.value.trim().toLocaleLowerCase('sv');
  const filtered = önskelista.filter(item => {
    const matchesType = activeFilter === 'Alla' || item.typ === activeFilter;
    const searchable = [item.mottagare, item.paket, item.länktext, item.länk]
      .join(' ')
      .toLocaleLowerCase('sv');
    return matchesType && searchable.includes(query);
  });

  listContainer.replaceChildren();

  const sections = [
    { type: 'Julklapp', title: 'Julklappslista', className: 'christmas' },
    { type: 'Födelsedag', title: 'Födelsedagslista', className: 'birthday' }
  ];

  sections.forEach(section => {
    const items = filtered.filter(item => item.typ === section.type);
    if (!items.length) return;

    const sectionElement = document.createElement('section');
    sectionElement.className = `list-section ${section.className}`;

    const heading = document.createElement('div');
    heading.className = 'table-heading';
    heading.append(
      createCell('recipient', 'Mottagare'),
      createCell('gift', section.title),
      createCell('store-heading', 'Butik/Länk')
    );
    sectionElement.append(heading);

    items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'gift-row';
      row.append(
        createCell('recipient', item.mottagare),
        createCell('gift', item.paket),
        createStoreCell(item)
      );
      sectionElement.append(row);
    });

    listContainer.append(sectionElement);
  });

  emptyState.hidden = filtered.length > 0;
}

searchInput.addEventListener('input', render);

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(candidate => {
      const selected = candidate === button;
      candidate.classList.toggle('active', selected);
      candidate.setAttribute('aria-pressed', String(selected));
    });
    render();
  });
});

render();
