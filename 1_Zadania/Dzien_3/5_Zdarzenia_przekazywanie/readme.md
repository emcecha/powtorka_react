# Przekazywanie zdarzeń &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowiko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
>
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie00.jsx` potem z kolejnymi numerami zadań, wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**

## Zadanie rozwiązywane z wykładowcą

### Zlicz kliknięcia (~ 15min)

Stwórz komponent `ButtonCounter` oraz komponent `ButtonToClick`.

Komponent `ButtonCounter` wyświetla `div`,a w nim `h1` oraz 2 przyciski stworzone za pomocą komponentu `ButtonToClick`. W `h1` ma być na początku wyświetlane 0 - docelowo ma tam się wyświetlać ile razy (łącznie) zostały kliknięte przyciski.

Komponent `ButtonToClick` zawiera  przycisk `button`, po kliknięciu którego jest przesyłana odpowiednia informacja do callbacku, który pobiera z props atrybut pod nazwą `onClick`. **Nie zapomnij sprawdzić czy ten atrybut został odpowiednio przekazany i jest funkcją.**

Wyrenderuj i przetestuj swój komponent.

Na schemacie niżej zostało zobrazowane jak mniej więcej powinien wyglądać proces przkazywania funkcji i gdzie ona jest wywoływana. To tylko rysunek poglądowy, pomagający zrozumieć cały proces.

![Schemat dla zadania 0](img/zadanie00.jpg "Schemat dla zadania 1")


**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 5min - 10min)
#### Przekazywanie parametrów do funkcji eventu

Stwórz komponent z elementem `a`. Po kliknięciu na przycisk wywołaj metodę ```handleClickButton()```, do której jako
parametr przekaż dowolny string. Zadaniem metody ```handleClickButton()```, ma być wypisanie przekazanego tekstu w konsoli. 

Wyrenderuj i przetestuj swój komponent. 

Dodatkowo zatrzymaj domyślną akcję przycisku. Musisz do metody ```handleClickButton()``` przekazać dwa parametry: 
1 - dowolny string, 2 - event. 
Zatrzymanie domyślnej akcji to event.preventDefault().

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 2 (~ 15min - 20min)
#### Lista zakupów

Stwórz komponent `Shop` oraz komponent `ShopItem`.

 `ShopItem` zawiera `div`, a w nim `h1`, którego zawartość jest pobierana z props `title`. W `div` znajduje się też przycisk z napisem "Kup", po jego kliknięciu przesyła się odpowiednią informację do callbacku, który pobiera z props pod nazwą `onBuy`.  **Nie zapomnij sprawdzić czy ten atrybut został odpowiednio przekazany i jest funkcją.** Wywołanie callbacku ma się odbyć za argumentem pobieranym z tytułu przekazanego w props (`title`).

 `Shop` ma mieć następującą strukturę:

 ```JSX
    <div>
        <ShopItem title="skarpetki" />
        <ShopItem title="koszula" />
        <ShopItem title="pończochy" />
        <ul>
            {list}
        </ul>           
    </div>        
 ```

Zamiast `list` ma się pojawić lista elementów `li`, z wymienionymi elementami, na których użytkownik kliknął przycisk "Kup".

Wyrenderuj i przetestuj swój komponent. Czy widzisz jakieś błędy w konsoli?
Jeżeli masz jeszcze problem ze zrozumieniem jak przekazywane są eventy do komponentów dzieci spróbuj na tym przykładzie rozrysować je sobie, tak jak w przykładzie pierwszym.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**
