# vanethy
Vanity account addresses creation for Ethereum or other EVM chains

## Installation

```bash
npm install -g vanethy
```

## Usage

```bash
% vanethy --help
Usage: vanethy [options] <prefix...>

Vanity account addresses creation for Ethereum or other EVM chains

Arguments:
  prefix             vanity prefixes to search for, like 123 or 0x123

Options:
  -V, --version      output the version number
  -i, --ignore-case  ignore case
  -h, --help         display help for command

```

## Example

For searching for addresses with prefixes 0x00, 0x11 and 0xAC, ignoring case for letters:

```bash
% vanethy -i 00 0x11 ac
Searching for "0x00" addresses...
Searching for "0x11" addresses...
Searching for "0xac" addresses...
# 0xac found:
0xac7a2b817ea7f32771acF0F9b8807C0CB62B980b
cart unfair again someone embody agree crawl spare ranch warrior effort puppy
0x37066f873d5f3a139e4b981aecee2c7e081e22bf75f2bd83586a1cc0d1682099
-------------------------------
# 0x11 found:
0x11b8a3C9833f10345C96dceA652ED44Dd76972E5
license wise great dry spy raven that opera mad tiger gossip baby
0xf8efa6feabf0db86c58351c3aae0dd52c3185e8b4d9060715ebcc767bdd7e494
-------------------------------
# 0x00 found:
0x00E612C92C478FeE93122fe90Afd22F9E3F33c38
slush random people worry lawsuit shy stay rural domain powder portion napkin
0xa9955d7f6cfab0f800758d9a2de0d284aa7b9920011bb019209e058fd4ffb645
-------------------------------
done searching for 3 vanethy addresses.
% 
```

**NOTE:** Please DO NOT use these addresses because their private key is now public domain!

For each result, in the first line you have your new vanethy address, then your mnemonic passphrase and lastly your private key. Please store these somewhere safe.

Vanethy works locally on your command line and doesn't connect to any server, so you can be sure you are the only one knowing your passphrase or private key.

Enjoy your vanethy addresses! <3 :)
