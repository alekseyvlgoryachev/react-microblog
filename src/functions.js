/**
 * Функция для работы со строкой классов, аналогично classList
 * @param {string} sClassNames - Исходная строка классов
 * @return {Object} - Объект с методами для работы с классами
 */
function ClassList(sClassNames) {
    // Внутренняя переменная для хранения текущего состояния классов
    let sCurrentClassNames = sClassNames || '';
    
    // Вспомогательная функция для получения массива классов
    const fnGetClassesArray = () => sCurrentClassNames.trim().split(/\s+/).filter(Boolean);
    
    return {
        /**
         * Добавляет класс, если его еще нет
         * @param {string} sClassToAdd - Класс для добавления
         * @return {Object} - Текущий объект для цепочки вызовов
         */
        add: function(sClassToAdd) {
            const aClasses = fnGetClassesArray();
            
            if (!aClasses.includes(sClassToAdd)) {
                aClasses.push(sClassToAdd);
                sCurrentClassNames = aClasses.join(' ');
            }
            
            return this;
        },
        
        /**
         * Удаляет класс, если он есть
         * @param {string} sClassToRemove - Класс для удаления
         * @return {Object} - Текущий объект для цепочки вызовов
         */
        remove: function(sClassToRemove) {
            const aClasses = fnGetClassesArray();
            const nIndex = aClasses.indexOf(sClassToRemove);
            
            if (nIndex !== -1) {
                aClasses.splice(nIndex, 1);
                sCurrentClassNames = aClasses.join(' ');
            }
            
            return this;
        },
        
        /**
         * Переключает наличие класса
         * @param {string} sClassToToggle - Класс для переключения
         * @return {Object} - Текущий объект для цепочки вызовов
         */
        toggle: function(sClassToToggle) {
            const aClasses = fnGetClassesArray();
            const nIndex = aClasses.indexOf(sClassToToggle);
            
            if (nIndex === -1) {
                aClasses.push(sClassToToggle);
            } else {
                aClasses.splice(nIndex, 1);
            }
            
            sCurrentClassNames = aClasses.join(' ');
            return this;
        },
        
        /**
         * Проверяет наличие класса
         * @param {string} sClassToCheck - Класс для проверки
         * @return {boolean} - true, если класс присутствует
         */
        contains: function(sClassToCheck) {
            const aClasses = fnGetClassesArray();
            return aClasses.includes(sClassToCheck);
        },
        
        /**
         * Возвращает текущую строку классов
         * @return {string} - Текущая строка классов
         */
        toString: function() {
            return sCurrentClassNames;
        },
        
        /**
         * Возвращает массив текущих классов
         * @return {Array} - Массив текущих классов
         */
        toArray: function() {
            return fnGetClassesArray();
        }
    };
}

export {ClassList};

/*
// Примеры использования
let sClassNames = "app-list-item d-flex justify-content-between";

// Добавление класса
let updatedClassList = ClassList(sClassNames).add("important");
console.log(updatedClassList.toString()); 
// "app-list-item d-flex justify-content-between important"

// Удаление класса
updatedClassList = ClassList(sClassNames).remove("d-flex");
console.log(updatedClassList.toString()); 
// "app-list-item justify-content-between"

// Переключение класса
updatedClassList = ClassList(sClassNames).toggle("important");
console.log(updatedClassList.toString()); 
// "app-list-item d-flex justify-content-between important"

// Проверка наличия класса
const bHasClass = ClassList(sClassNames).contains("app-list-item");
console.log(bHasClass); // true

// Цепочка вызовов
updatedClassList = ClassList(sClassNames)
    .add("active")
    .remove("d-flex")
    .toggle("highlighted");
console.log(updatedClassList.toString());
// "app-list-item justify-content-between active highlighted"

// Получение массива классов
const aClasses = ClassList(sClassNames).toArray();
console.log(aClasses); 
// ["app-list-item", "d-flex", "justify-content-between"]

*/