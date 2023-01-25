const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
     thermostat = new Thermostat();
  });

  it('sets the temp for 20', () => {
    expect(thermostat.currentTemp()).toBe(20);
  });

  it('rises temp by one', () => {
    thermostat.up()
    expect(thermostat.currentTemp()).toBe(21);
  });

  it('tries to rise the temp to 26 with PS on', () => {
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.currentTemp()).toBe(25);
  });

  it('decreases the temp by one untill reaching 10', () => {
    thermostat.down();
    expect(thermostat.currentTemp()).toBe(19);
  });

  it('decreases the temp by one untill reaching 10', () => {
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.currentTemp()).toBe(10);
  });

  it('turns the power saving mode off', () => {
    expect(thermostat.changePowerSaving()).toBe(false)
  })

  it('can raise temp above 25 with PS off', () => {
    thermostat.changePowerSaving();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.currentTemp()).toBe(26);
  });

  it('resets temp to 20 degrees', () => {
    thermostat.up()
    thermostat.up()
    thermostat.reset()
    expect(thermostat.currentTemp()).toBe(20)
  })

  it('returns low usage when temp use < 18', () => {
    thermostat.down()
    thermostat.down()
    thermostat.down()
    expect(thermostat.energyUsage()).toBe('Low')
  })

  it('returns medium usage when temp use <= 25 & >= 18', () => {
    expect(thermostat.energyUsage()).toBe('Medium')
  })

  it('returns high usage when temp use < 25', () => {
    thermostat.changePowerSaving()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    expect(thermostat.energyUsage()).toBe('High')
  })
});