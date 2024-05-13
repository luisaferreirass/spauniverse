export const homepage = document.querySelector('#homepage')
export const universepage = document.querySelector('#universepage')
export const explorerpage = document.querySelector('#explorationpage')

export function handleHomePage () {
    document.documentElement.classList.add('home')
    document.documentElement.classList.remove('universe')
    document.documentElement.classList.remove('exploration')
}

export function handleUniversePage () {
    document.documentElement.classList.remove('home')
    document.documentElement.classList.add('universe')
    document.documentElement.classList.remove('exploration')
}
export function handleExplorrationPage () {
    document.documentElement.classList.remove('home')
    document.documentElement.classList.remove('universe')
    document.documentElement.classList.add('exploration')
}



