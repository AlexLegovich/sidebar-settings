// document.addEventListener('DOMContentLoaded', () => {
//   const overlay = document.querySelector('.overlay')
//   const overlayColorInput = document.getElementById('overlayColorInput')
//   const overlayOpacityRange = document.getElementById('overlayOpacity')
//   const overlayBlurRange = document.getElementById('overlayBlur')
//   const opacityValueText = document.querySelector('.value-opacity')
//   const blurValueText = document.querySelector('.value-blur')
//   const setupBtn = document.querySelector('.setup')
//   const settings = document.querySelector('.settings__container')
//   const sidebar = document.querySelector('.sidebar')
//   const sidebarColorInput = document.getElementById('sidebarColorInput')
//   const sidebarHeader = document.querySelector('.sidebar-header')
//   const sidebarHeaderColorInput = document.getElementById('sidebarHeaderColorInput')

//   function toggleSetup() {
//     setupBtn.addEventListener('click', () => {
//       settings.classList.toggle('hidden')

//       // Update button text based on panel state
//       setupBtn.textContent = settings.classList.contains('hidden')
//         ? 'Show setup'
//         : 'Hide setup'
//     })
//   }

//   // Initialize button text when page loads
//   if (settings.classList.contains('hidden')) {
//     setupBtn.textContent = 'Show setup'
//   } else {
//     setupBtn.textContent = 'Hide setup'
//   }

//   // Update overlay color and opacity using RGBA
//   function updateOverlay() {
//     const color = overlayColorInput.value
//     const opacity = overlayOpacityRange.value
//     // Convert hex to RGB
//     const r = parseInt(color.slice(1, 3), 16)
//     const g = parseInt(color.slice(3, 5), 16)
//     const b = parseInt(color.slice(5, 7), 16)
//     overlay.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`
//     opacityValueText.textContent = opacity
//   }

//   // Update overlay blur
//   function updateOverlayBlur() {
//     const blurValue = overlayBlurRange.value
//     overlay.style.backdropFilter = `blur(${blurValue}px)`
//     overlay.style.webkitBackdropFilter = `blur(${blurValue}px)` // Safari support
//     blurValueText.textContent = blurValue
//   }

//   // Update sidebar bg color
//   function updateSidebarBg() {
//     const sidebarColor = sidebarColorInput.value
//     sidebar.style.backgroundColor = sidebarColor
//     sidebarHeader.style.backgroundColor = sidebarColor
//   }

//   // Event listeners
//   overlayColorInput.addEventListener('input', updateOverlay)
//   sidebarColorInput.addEventListener('input', updateSidebarBg)
//   overlayOpacityRange.addEventListener('input', updateOverlay)
//   overlayBlurRange.addEventListener('input', updateOverlayBlur)

//   // Initialize values on page load
//   updateOverlay()
//   updateSidebarBg()
//   updateOverlayBlur()
//   toggleSetup()
// })

//Conf
const sidebarWidth = 500
const sidebarZIndex = 1049
let missingMessage = 'Information will be added soon '

//Create elements

//Create overlay
function createOverlay() {
  const overlay = document.createElement('div')
  overlay.classList.add('overlay')
  document.body.appendChild(overlay)
}

createOverlay()
//Create sidebar
function createSidebar() {
  const sidebar = document.createElement('div')
  sidebar.classList.add('sidebar')
  document.body.appendChild(sidebar)
  sidebar.style.zIndex = sidebarZIndex
  sidebar.style.width = `${sidebarWidth}px`
}
createSidebar()

//Sidebar HTML
function createSidebarHTML() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.innerHTML = `<div class="sidebar-header">
      <div class="close-sidebar">
      <span></span>
        <span></span>
        </div>
    </div>
    <div class="sidebar-content">
      <div class="sidebar__image">
        <img src="https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171" alt="Image">
      </div>
      <h4 class="sidebar__title">Switzerland</h4>
        <div class="sidebar__text">Switzerland sits at the heart of Europe, a land of striking contrasts and timeless beauty. Towering alpine peaks rise above green valleys, crystal-clear lakes mirror the sky, and neat villages seem to have stepped out of a postcard. Its small size hides an incredible variety of landscapes — from the icy glaciers of the Bernese Alps to the gentle vineyards that roll along Lake Geneva. Everywhere you look, nature feels close, pure, and perfectly cared for.</div>
    </div>`
}

createSidebarHTML()

function addShadowOnScroll() {
  const sidebarHeader = document.querySelector('.sidebar-header')
  const sidebar = document.querySelector('.sidebar')
  sidebar.addEventListener('scroll', () => {
    sidebar.scrollTop > 0
      ? sidebarHeader.classList.add('scrolled')
      : sidebarHeader.classList.remove('scrolled')
  })
}
addShadowOnScroll()

function lockBody() {
  const body = document.body
  console.log(body)
  body.style.paddingRight = `${15}px`
  body.classList.add('locked')
}
lockBody()

function toggleSettings() {
  const trigger = document.querySelector('.btn-settings')
  const settings = document.querySelector('.settings')

  trigger.addEventListener('click', () => {
    settings.classList.toggle('hidden')
    trigger.innerHTML = settings.classList.contains('hidden')
      ? 'Show settings'
      : 'Hide settings'
  })
}

toggleSettings()

function toggleSidebarWidth() {
  const widthInput = document.querySelector('.width-range')
  const widthDisplay = document.querySelector('.width-value')
  const sidebar = document.querySelector('.sidebar')

  const updateWidth = () => {
    const value = widthInput.value
    sidebar.style.width = `${value}px`
    widthDisplay.textContent = value
  }

  // Initialize width
  updateWidth()

  // Add event listener
  widthInput.addEventListener('input', updateWidth)
}

toggleSidebarWidth()

function changeOverlayColor() {
  const overlay = document.querySelector('.overlay')
  const colorInput = document.querySelector('.overlay-color-control')
  const colorDisplay = document.querySelector('.overlay-color-value')
  const colorDisplayCSS = document.querySelector('.overlay-bg-css')

  const updateColor = () => {
    const color = colorInput.value
    overlay.style.backgroundColor = color
    colorDisplay.textContent = color
    colorDisplayCSS.textContent = color
  }

  // Initialize once
  updateColor()

  // Add input listener
  colorInput.addEventListener('input', updateColor)
}

changeOverlayColor()

function changeOverlayOpacity() {
  const overlay = document.querySelector('.overlay')
  const rangeInput = document.querySelector('.opacity-range')
  const valueDisplay = document.querySelector('.opacity-value')
  const valueDisplayCSS = document.querySelector('.overlay-opacity-css')

  const updateOpacity = () => {
    const value = rangeInput.value
    overlay.style.opacity = value
    valueDisplay.textContent = value
    valueDisplayCSS.textContent = value
  }

  // Initialize once
  updateOpacity()

  // Add input listener
  rangeInput.addEventListener('input', updateOpacity)
}

changeOverlayOpacity()

function changeSidebarColor() {
  const sidebar = document.querySelector('.sidebar')
  const sidebarHeader = document.querySelector('.sidebar-header')
  const colorInput = document.querySelector('.sidebar-color-control')
  const colorValue = document.querySelector('.sidebar-color-value')
  const colorValueCSS = document.querySelector('.sidebar-color-css')

  const updateColor = () => {
    const color = colorInput.value
    sidebar.style.backgroundColor = color
    sidebarHeader.style.backgroundColor = color
    colorValue.textContent = color
    colorValueCSS.textContent = color
  }

  // Initialize once
  updateColor()

  // Add event listener once
  colorInput.addEventListener('input', updateColor)
}

changeSidebarColor()

function changeHeaderPaddings() {
  const header = document.querySelector('.sidebar-header')
  const inputBlock = document.querySelector('.header-ptb')
  const inputInline = document.querySelector('.header-plr')
  const paddingValueCSS = document.querySelector('.header-paddings')

  const updatePadding = () => {
    header.style.paddingBlock = `${parseInt(inputBlock.value) || 0}px`
    header.style.paddingInline = `${parseInt(inputInline.value) || 0}px`
    paddingValueCSS.textContent =
      header.style.paddingBlock + ' ' + header.style.paddingInline
  }

  // Initialize once
  updatePadding()

  // Add listeners (no repetition)
  ;[inputBlock, inputInline].forEach((input) =>
    input.addEventListener('input', updatePadding)
  )
}

changeHeaderPaddings()

function changeSidebarPadding() {
  const sidebarContent = document.querySelector('.sidebar-content')
  const sidebarContentCSS = document.querySelector('.sidebar-paddings')

  // Map sides to their corresponding input selectors
  const sides = {
    top: document.querySelector('.sidebar-pt'),
    right: document.querySelector('.sidebar-pr'),
    bottom: document.querySelector('.sidebar-pb'),
    left: document.querySelector('.sidebar-pl'),
  }

  // Function to update padding dynamically
  const updatePadding = () => {
    sidebarContent.style.padding = `
      ${parseInt(sides.top.value) || 0}px
      ${parseInt(sides.right.value) || 0}px
      ${parseInt(sides.bottom.value) || 0}px
      ${parseInt(sides.left.value) || 0}px
    `
    sidebarContentCSS.textContent =
      sides.top.value +
      'px ' +
      sides.right.value +
      'px ' +
      sides.bottom.value +
      'px ' +
      sides.left.value +
      'px'
  }

  // Initialize padding once
  updatePadding()

  // Add input listeners for all sides
  Object.values(sides).forEach((input) => {
    input.addEventListener('input', updatePadding)
  })
}

// Run on page load
changeSidebarPadding()

function changeCloseSize() {
  const closeButton = document.querySelector('.close-sidebar')
  const sizeInput = document.querySelector('.close-size')
  const sizeDisplay = document.querySelector('.close-size-value')
  const sizeDisplayCSS = document.querySelector('.icon-size')

  const updateSize = () => {
    const size = parseInt(sizeInput.value) || 0
    closeButton.style.width = `${size}px`
    closeButton.style.height = `${size}px` // ✅ fixed typo
    sizeDisplay.textContent = size
    sizeDisplayCSS.textContent = size + 'px'
  }

  // Initialize once
  updateSize()

  // Add live updates
  sizeInput.addEventListener('input', updateSize)
}

changeCloseSize()

function changeCloseColor() {
  const closeButtonLines = document.querySelectorAll('.close-sidebar span')
  const colorInput = document.querySelector('.close-color')
  const colorDisplay = document.querySelector('.close-color-value')
  const colorDisplayCSS = document.querySelector('.icon-color')

  const updateColor = () => {
    const color = colorInput.value
    colorDisplay.textContent = color
    colorDisplayCSS.textContent = color

    closeButtonLines.forEach((line) => {
      line.style.backgroundColor = color
    })
  }

  updateColor()

  colorInput.addEventListener('input', updateColor)
}

changeCloseColor()

function changeImageHeight() {
  const sidebarImage = document.querySelector('.sidebar__image')
  const heightInput = document.querySelector('.image-height')
  const heightValueCSS = document.querySelector('.image-h')

  const updateHeight = () => {
    const height = parseInt(heightInput.value) || 0
    sidebarImage.style.minHeight = `${height}px`
    heightValueCSS.textContent = height + 'px'
  }

  updateHeight()
  heightInput.addEventListener('input', updateHeight)
}

changeImageHeight()

function changeImageRadius() {
  const sidebarImage = document.querySelector('.sidebar__image')
  const radiusInput = document.querySelector('.image-radius')
  const radiusValueCSS = document.querySelector('.image-r')
  radiusValueCSS.textContent = radiusInput.value + 'px'

  const updateImageRadius = () => {
    const radius = parseInt(radiusInput.value) || 0
    sidebarImage.style.borderRadius = `${radius}px`
    radiusValueCSS.textContent = radius + 'px'
  }
  radiusInput.addEventListener('input', updateImageRadius)
}

changeImageRadius()

function changeImageMarginBottom() {
  const sidebarImage = document.querySelector('.sidebar__image')
  const marginInput = document.querySelector('.image-mb')
  const marginValueCSS = document.querySelector('.image-bottom')
  marginValueCSS.textContent = marginInput.value + 'px'

  const updateImageMarginBottom = () => {
    const margin = parseInt(marginInput.value) || 0
    sidebarImage.style.marginBottom = `${margin}px`
    marginValueCSS.textContent = margin + 'px'
  }
  marginInput.addEventListener('input', updateImageMarginBottom)
}

changeImageMarginBottom()

function changeTitleColor() {
  const title = document.querySelector('.sidebar__title')
  const titleColorInput = document.querySelector('.title-color')
  const titleColorValue = document.querySelector('.title-color-value')
  const titleColorValueCSS = document.querySelector('.color-title')
  titleColorValue.textContent = titleColorInput.value
  titleColorValueCSS.textContent = titleColorInput.value
  const updateTitleColor = () => {
    const color = titleColorInput.value
    titleColorValue.textContent = titleColorInput.value
    titleColorValueCSS.textContent = color
    title.style.color = color
  }
  titleColorInput.addEventListener('input', updateTitleColor)
}

changeTitleColor()

function changeTitleFontSize() {
  const title = document.querySelector('.sidebar__title')
  const titleFontRange = document.querySelector('.title-size')
  const titleFontValue = document.querySelector('.title-font-value')
  const titleFontValueCSS = document.querySelector('.title-font-size')
  titleFontValue.textContent = titleFontRange.value
  titleFontValueCSS.textContent = titleFontRange.value + 'px'
  const updateTitleFontSize = () => {
    const fontSize = parseInt(titleFontRange.value) + 'px'
    title.style.fontSize = fontSize
    titleFontValue.textContent = titleFontRange.value
    titleFontValueCSS.textContent = titleFontRange.value + 'px'
  }
  titleFontRange.addEventListener('input', updateTitleFontSize)
}

changeTitleFontSize()

function changeTitleLineHeight() {
  const title = document.querySelector('.sidebar__title')
  const titleHeightRange = document.querySelector('.title-lh')
  const titleHeigthValue = document.querySelector('.title-height-value')
  const titleHeigthValueCSS = document.querySelector('.title-line')
  titleHeigthValue.textContent = titleHeightRange.value
  titleHeigthValueCSS.textContent = titleHeightRange.value + '%'
  const updateTitleHeight = () => {
    const lineHeight = parseInt(titleHeightRange.value) + '%'
    title.style.lineHeight = lineHeight
    titleHeigthValue.textContent = titleHeightRange.value
    titleHeigthValueCSS.textContent = lineHeight
  }
  titleHeightRange.addEventListener('input', updateTitleHeight)
}

changeTitleLineHeight()

function changeTitleMarginBottom() {
  const title = document.querySelector('.sidebar__title')
  const titleMarginBottomInput = document.querySelector('.title-mb')
  const titleMarginBottomValueCSS = document.querySelector('.title-bottom')
  titleMarginBottomValueCSS.textContent = titleMarginBottomInput.value + 'px'
  const updateTitleMarginBottom = () => {
    const mb = parseInt(titleMarginBottomInput.value) + 'px'
    title.style.marginBottom = mb
    titleMarginBottomValueCSS.textContent = mb
  }
  titleMarginBottomInput.addEventListener('input', updateTitleMarginBottom)
}

changeTitleMarginBottom()

function changeTextColor() {
  const text = document.querySelector('.sidebar__text')
  const textColorInput = document.querySelector('.text-color')
  const textColorValue = document.querySelector('.text-color-value')
  const textColorValueCSS = document.querySelector('.color-text')
  textColorValue.textContent = textColorInput.value
  textColorValueCSS.textContent = textColorInput.value
  const updateTextColor = () => {
    const color = textColorInput.value
    textColorValue.textContent = textColorInput.value
    textColorValueCSS.textContent = color
    text.style.color = color
  }
  textColorInput.addEventListener('input', updateTextColor)
}

changeTextColor()

function changeTextFontSize() {
  const text = document.querySelector('.sidebar__text')
  const sizeFontRange = document.querySelector('.text-size')
  const textFontValue = document.querySelector('.text-font-value')
  const textFontValueCSS = document.querySelector('.size-text')
  textFontValue.textContent = sizeFontRange.value
  textFontValueCSS.textContent = sizeFontRange.value + 'px'
  const updateTextFontSize = () => {
    const fontSize = parseInt(sizeFontRange.value) + 'px'
    text.style.fontSize = fontSize
    textFontValue.textContent = sizeFontRange.value
    textFontValueCSS.textContent = fontSize
  }
  sizeFontRange.addEventListener('input', updateTextFontSize)
}

changeTextFontSize()

function changeTextLineHeight() {
  const text = document.querySelector('.sidebar__text')
  const textHeightRange = document.querySelector('.text-lh')
  const textHeigthValue = document.querySelector('.text-height-value')
  const textHeigthValueCSS = document.querySelector('.text-line')
  textHeigthValue.textContent = textHeightRange.value
  textHeigthValueCSS.textContent = textHeightRange.value + '%'
  const updateTitleHeight = () => {
    const lineHeight = parseInt(textHeightRange.value) + '%'
    text.style.lineHeight = lineHeight
    textHeigthValue.textContent = textHeightRange.value
    textHeigthValueCSS.textContent = lineHeight
  }
  textHeightRange.addEventListener('input', updateTitleHeight)
}

changeTextLineHeight()

function generateModalContent() {
  const modalBody = document.querySelector('.modal-body')
  modalBody
}

function copyCss() {
  const root = document.getElementById('root-css')
 const copyBtn = document.querySelector('.code-copy')
 copyBtn.innerHTML = 'Copied ✅'
 copyBtn.classList.add('btn-success')

 setTimeout(() => {
  copyBtn.classList.remove('btn-success')
   copyBtn.innerHTML = 'Copy CSS'
 }, 3000);

  // Get raw HTML inside the code block
  let html = root.innerHTML

  // Convert <br> to new lines
  html = html.replace(/<br\s*\/?>/gi, '\n')

  // Remove <p> but keep the text inside
  html = html.replace(/<p[^>]*>/gi, '')
  html = html.replace(/<\/p>/gi, '\n')

  // Create a temp div to strip tags but keep span inner text
  const temp = document.createElement('div')
  temp.innerHTML = html
  const text = temp.innerText // Final clean CSS

  navigator.clipboard.writeText(text.trim())
}

const copyBtn = document.querySelector('.code-copy')

copyBtn.addEventListener('click', copyCss)
