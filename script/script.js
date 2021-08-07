let arrowDown = document.querySelectorAll('.arrow-down');
let accordianQue = document.querySelectorAll('.accordian-que');
let accordianAns = document.querySelectorAll('.accordian-ans');

const openAccordian = (index) => {
  console.log(index);
  if (!arrowDown[index].classList.contains('arrow-up')) {
    arrowDown[index].classList.add('arrow-up');
    accordianQue[index].classList.add('text-bold');
    accordianAns[index].classList.remove('hide-ans');
  } else {
    arrowDown[index].classList.remove('arrow-up');
    accordianQue[index].classList.remove('text-bold');
    accordianAns[index].classList.add('hide-ans');
  }
};

arrowDown.forEach((arrow, index) => {
  arrow.addEventListener('click', () => openAccordian(index));
});
