# MagicMirror² Module: Quote Catalog
The `MagicMirror-QuoteCatalog` is a module for [MagicMirror²](https://magicmirror.builders/) that displays quotes taken from a variety of sources - movies, books, and people. Because this module does not use an API, new ones have to be manually added by editing the `random_quotes.js` file and adding/removing quotes.

![Example](.github/example.png)


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
    header: 'The Quote Catalog',
    position: 'top_left',
    config: {
                // See below for configurable options
            }
},
```


## Configuration options
<table width="100%">
<!-- why, markdown... -->
    <thead>
        <tr>
            <th>Option</th>
            <th width="100%">Description</th>
        </tr>
    <thead>
    <tbody>
        <tr>
            <td><code>timeFormat</code></td>
            <td>How often a new quote gets displayed. The value is in seconds.<br>
                <br><b>Possible values:</b> <code>int</code> in <code>seconds</code>
                <br><b>Default value:</b> <code>300</code>
            </td>
        </tr>
        <tr>
            <td><code>fadeSpeed</code></td>
            <td>How fast to fade out and back in when changing quotes. The value is in seconds.<br>
                <br><b>Possible values:</b> <code>int</code> in <code>seconds</code>
                <br><b>Default value:</b> <code>5</code>
            </td>
        </tr>
    </tbody>
</table>


## Updating Quotes
Because an API is not used for this module, the quotes will have to be updated/changed manually. You can edit the
`QuoteCatalog.js` file and add/remove quotes.

## Special Thanks
- [Ashley M. Kirchner](https://github.com/KirAsh4) for creating the [random_quotes](https://github.com/KirAsh4/random_quotes) module that I used as guidance in creating this module.