Task performed during Front-End Developer Bootcamp

# Moduł JavaScript

## Lekcja 4

### Zadanie 3 - poziom podstawowy

Stwórz funkcję `getInputValue`, która będzie zwracała zawartość atrybutu `value` gdy ten nie jest pusty, lub `null` gdy jest pusty. Funkcja w parametrze otrzyma dowolny element `<input>` i nie powinna go modyfikować, powinna jedynie zwrócić (`return`) zawartość atrybutu `value` lub `null`.

W tym zadaniu musisz wykorzystać już wybrany dla Ciebie element (węzeł DOM (DOM Node)), który funkcja ma otrzymać przekazany, jako parametr w inpucie. Nie ma wobec tego potrzeby robić samemu `document.querySelector("#test-input")`, wystarczy jedynie `(node) =>` -- i tutaj użycie `node` (pod którym kryje się przekazywany do funkcji `<input>`).

Przykładowy input:
`<input id="test-input" value="test" />`
`getInputValue(document.querySelector('#test-input'));`

Przykładowy output:
`'test'`
