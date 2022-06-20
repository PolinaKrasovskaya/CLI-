# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/dYsNmKNDpfT9669dByF1o71Eb2ITy8

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/ehcXY6O34VAMWqz4pVmRQd0G7wnUDB

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/MQl92KuvWVzp82HSxHtiBodaEaL1y8

# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/ox5MfwqVjVwTx9zc3KQ3lqHPKIuSJj