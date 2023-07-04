const $boxers = document.querySelector('#boxers')
const $boxersImages = $boxers.querySelectorAll('img')

const $info = document.getElementById('info')
const $combat = document.getElementById('combat')

$boxersImages.forEach(($img) => {
  $img.addEventListener('mouseleave', () => {
    $boxersImages.forEach(($img) => {
      $img.style.filter = 'none'
      $img.style.transition = 'all .3s ease-in-out'
      $img.style.scale = '1'
    })

    $info.style.opacity = '1'
    $info.style.visibility = 'visible'
    $info.style.transition = 'all .3s ease-in-out'

    $combat.style.opacity = '0'
    $combat.style.visibility = 'hidden'
    $combat.style.transition = 'all .3s ease-in-out'
  })

  $img.addEventListener('mouseenter', () => {
    const sectionImages = $img.parentNode.children
    const position = Array.from(sectionImages).indexOf($img)
    // get images from left side and right side
    const [leftBoxer, rightBoxer] = [
      $boxersImages[position], // left side
      $boxersImages[position + $boxersImages.length / 2] // right side
    ]
    // Hide the information
    $info.style.opacity = '0'
    $info.style.visibility = 'hidden'
    $info.style.transition = 'all .3s ease-in-out'

    $combat.style.opacity = '1'
    $combat.style.visibility = 'visible'
    $combat.style.transition = 'all .3s ease-in-out'

    const [firstBoxerName, secondBoxerName] = $combat.querySelectorAll('h3')
    firstBoxerName.innerText = leftBoxer.alt
    secondBoxerName.innerText = rightBoxer.alt

    // hide rest of the boxers
    $boxersImages.forEach(($img) => {
      $img.style.filter = 'blur(1px) grayscale(.8)'
      $img.style.transition = 'all .3s ease-in-out'
    })

    leftBoxer.style.scale = '1.2'
    leftBoxer.style.filter = 'contrast(1.1)'
    leftBoxer.style.transition = 'all .3s ease-in-out'

    rightBoxer.style.scale = '1.2'
    rightBoxer.style.filter = 'contrast(1.1)'
    rightBoxer.style.transition = 'all .3s ease-in-out'
  })
})
