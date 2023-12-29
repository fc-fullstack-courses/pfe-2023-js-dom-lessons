/*
  деструктуризація - новий метод створення змінних
*/

const pc = {
  cpu: {
    name: 'Intel Core XXL 59509',
    frequency: 5.1,
    coreQuantity: 16
  },
  videocard: {
    name: 'Nvidia RTX 9090',
    vram: 32,
    fans: 4,
    minPsuWatt: 1200
  },
  ram: {
    value: 64,
    unitOfMeasure: 'Gb'
  },
  memoryDrives: [
    {
      type: 'HDD',
      memory: {
        value: 6,
        unit: 'Tb',
      }
    },
    {
      type: 'SSD',
      memory: {
        value: 1024,
        unitOfMeasure: 'Gb'
      }
    }
  ],
  price: 57000,
  colorOfTower: 'black',
  monitor: {
    manufacturer: 'LG',
    model: 'ah238-ndss3343-dfdf',
    sizes: {
      height: {
        value: 22,
        unitOfMeasure: 'cm'
      },
      width: {
        value: 58,
        unitOfMeasure: 'cm'
      },
    }
  }
}

// console.log(pc.price);
// console.log(pc.memoryDrives[1].memory.value);
// console.log(pc.monitor.sizes.width.value);

