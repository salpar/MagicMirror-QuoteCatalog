# MagicMirror² Module: Quote Catalog
The `MagicMirror-QuoteCatalog` is a module for [MagicMirror²](https://magicmirror.builders/) that displays quotes taken from a variety of sources - movies, books, and people.


## Installation

Remote to your MM2-box with your terminal software and go to your MagicMirror's Module folder:
````bash
cd ~/MagicMirror/modules
````

Clone the repository:
````bash
git clone https://github.com/salpar/MagicMirror-QuoteCatalog.git
````

Go to the modules folder:
````bash
cd MagicMirror-QuoteCatalog
````

Install the dependencies:
````bash
npm install
````

Add the module to the modules array in the `config/config.js` file by adding the following section. You can change this configuration later when you see this works:
```
{
    module: 'MagicMirror-QuoteCatalog',
    header: 'Quote',
    position: 'top_left',
    config: {
                // See below for configurable options
            }
},
```


## Configuration options

| Option           | Description
|----------------- |-----------

| `timeFormat`     | *Optional* How often a new quote gets displayed. The value is in seconds. <br><br> **Type:** `int` <br> **Default value:** `'300' seconds` (5 minutes)
| `fadeSpeed`      | *Optional* How fast to fade out and back in when changing quotes. The value is in seconds. <br><br> **Type:** `int` <br> **Default value:** `5`


## Updating Quotes
Because an API is not used for this module, the quotes will have to be updated/changed manually. You can edit the
`QuoteCatalog.js` file and add/remove quotes.

## Special Thanks
- [Ashley M. Kirchner](https://github.com/KirAsh4) for creating the [random_quotes](https://github.com/KirAsh4/random_quotes) module that I used as guidance in creating this module.