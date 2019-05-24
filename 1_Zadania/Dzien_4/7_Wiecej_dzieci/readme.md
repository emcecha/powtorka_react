# Więcej dzieci &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie00.jsx` potem z kolejnymi numerami zadań, wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**

## Zadanie rozwiązywane z wykładowcą

### Szablon e-mail (~ 5min - 10min)

Stwórz komponent `Email`. Jego struktura ma być następująca:

```HTML
<div>
    <h1>{subject}</h1>
    <div>{body}<hr />{footer}</div>
    <pre>{textBody}<hr />{footer}</pre>
</div>
```

Komponent powinien przyjmować przez props:
- `subject`, który wstawia do nagłówka;
- `body`, który wstawia do wewnętrznego `div`;
- `footer`, który wstawia do obu elementów `footer`;
- `textBoxy`, który wstawia do elementu `pre`.

Wyrenderuj i przetestuj swój komponent, używając takiej konstrukcji:
```JSX
<Email
    subject = {
        <span>Witaj, oto treść maila</span>
    }
    body = {
        <h1>Promocja z e-maila!</h1>
        <hr />
        <p>Witaj, oto Twój nowy e-mail...</p>
    }
    textBody = {
        <p>Promocja z e-maila!</p>
        <p>Witaj, oto Twój nowy e-mail...</p>
    }
    footer = {
        <p>Mail by my
          <a href="http://example.com/unsubscripe">Kliknij tutaj, aby się wypisać</a>
        </p>
    }
/>
```

Sprawdź, czy została poprawnie wygenerowana strona.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**


## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 15min - 20min)
#### Szablon strony Holy grail

Stwórz komponent `WebsiteTemplate`. Spraw, żeby renderował on szablon strony "holy grail":

![Układ strony holy grail](https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/images/flex-order-page.svg "Układ strony holy grail")

Skorzystaj z dołączonego arkusza stylu, możesz się posiłkować tym artykułem: <https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/> .

Komponent powinien przyjmować przez props:
- `header`, który wstawia do nagłówka;
- `content`, który wstawia do głównej treści;
- `menu`, który wstawia do menu po lewej;
- `ads`, który wstawia do sekcji po prawej;
- `footer`, który wstawia do stopki.

Wyrenderuj i przetestuj swój komponent, używając takiej konstrukcji:
```JSX
<WebsiteTemplate
    header = {
        <h1>Moja strona</h1>
    }
    content = {
        <div>
            <h1>Witaj na mojej stronie</h1>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        </div>
    }
    menu = {
        <ul>
            <li>Strona główna</li>
            <li>O mnie</li>
            <li>Kontakt</li>
        </ul>
    }
    ad = {null}
    footer = {
        <p>&copy; 2017 Coders Lab</p>
    }
/>
```

Sprawdź, czy została poprawnie wygenerowana strona.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**
