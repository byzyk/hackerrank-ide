import shell from 'shelljs'

export const NAME = process.env.NAME

export let stdout = ''
export let index = 1

export const runCmd = () => {
  stdout = shell.exec(
    `cat src/${NAME}/input/input-${index}.txt | babel-node src/${NAME}`
  )
  index++
}
