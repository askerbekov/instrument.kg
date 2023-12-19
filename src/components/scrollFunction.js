export const scrollToHeader = () => {
  const header = document.getElementById('header')
  if(header){
    // console.log('scroll')
    header.scrollIntoView({behavior: 'smooth'})
  }
}
