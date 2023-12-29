/*
  деструктуризація - новий метод створення змінних
*/

const pc = {
  cpu: {
    name: 'Intel Core XXL 59509',
    frequency: 5.1,
    coreQuantity: 16,
  },
  videocard: {
    name: 'Nvidia RTX 9090',
    vram: 32,
    fans: 4,
    minPsuWatt: 1200,
  },
  ram: {
    value: 64,
    unitOfMeasure: 'Gb',
  },
  memoryDrives: [
    {
      type: 'HDD',
      memory: {
        value: 6,
        unit: 'Tb',
      },
    },
    {
      type: 'SSD',
      memory: {
        value: 1024,
        unitOfMeasure: 'Gb',
      },
    },
  ],
  price: 57000,
  colorOfTower: 'black',
  monitor: {
    manufacturer: 'LG',
    model: 'ah238-ndss3343-dfdf',
    sizes: {
      height: {
        value: 22,
        unitOfMeasure: 'cm',
      },
      width: {
        value: 58,
        unitOfMeasure: 'cm',
      },
    },
  },
};

// console.log(pc.price);
// console.log(pc.memoryDrives[1].memory.value);
// console.log(pc.monitor.sizes.width.value);

// деструктуризація об'єктів
const {
  colorOfTower,
  price: pcPrice,
  monitor: {
    manufacturer: pcMonitorManufacturer,
    sizes: {
      width: { value: monitorWidth },
    },
  },
} = pc;

// const { manufacturer: pcMonitorManufacturer } = monitor;
// const colorOfTower = pc.colorOfTower;
// const pcPrice = pc.price;

console.log(colorOfTower);
console.log(pcPrice);
console.log(pcMonitorManufacturer);
console.log(monitorWidth);

// function test(obj, ...rest) {
//   const { id } = obj;
function test({ id, obj: {} }, ...rest) {
  return id;
}

const user = {
  id: 134343,
  email: 'user@mail.com',
  password: 'askcbskjduiy34923',
};

const { password, id, ...userWithoutPassword } = user;
