import LogTime from "./index"

jest.setTimeout(10000)

describe("[LogTime] Test", () => {
  it("Should call function with message and time", async () => {
    const myConsole = {
      info: jest.fn(),
    }

    const logTime = new LogTime(myConsole.info)

    logTime.start()

    await new Promise((r) => setTimeout(r, 1000))

    logTime.stop("My function delayed {{seconds}} {{minutes}} {{hours}} {{days}}")

    expect(myConsole.info).toHaveBeenCalledTimes(1)
  })

  it("Should return 0 in time if not started the function", async () => {
    const myConsole = {
      info: jest.fn(),
    }

    const logTime = new LogTime(myConsole.info)

    logTime.stop("My function delayed {{foo}}")

    expect(myConsole.info).toHaveBeenCalledTimes(1)
  })
})
