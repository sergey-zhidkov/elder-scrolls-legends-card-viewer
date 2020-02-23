import { buildClassName } from "./utils"

test("builds correct class name", () => {
    const componentClassName = "ComponentName"
    const classes = "class2 class2"
    const className = buildClassName(componentClassName, undefined, null, classes)
    expect(className).toBe(`${componentClassName} ${classes}`)
})

test("builds correct class name with empty input", () => {
    const className = buildClassName()
    expect(className).toBe("")
})
