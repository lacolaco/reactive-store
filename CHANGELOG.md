# Changelog

See [Releases](https://github.com/lacolaco/reactive-store/releases) for checking change logs. This file is left as just history and will be no longer updated.

## [4.0.0](https://github.com/lacolaco/reactive-store/compare/v3.1.3...v4.0.0) (2020-05-20)


### ⚠ BREAKING CHANGES

* Built-in redux-devtools integration has been removed. Use storeUpdateChanges and connect events to your devtools manually
* `onChange` init option has been removed. Use storeUpdateChanges instead

### Features

* add Store#reset() method ([#149](https://github.com/lacolaco/reactive-store/issues/149)) ([0235794](https://github.com/lacolaco/reactive-store/commit/02357946b8980219a46465a70b4d7b99553be7f9))
* remove deprecated onChange option ([#150](https://github.com/lacolaco/reactive-store/issues/150)) ([b6c7ad0](https://github.com/lacolaco/reactive-store/commit/b6c7ad01b7ded8b46080c3a89414b7a3174dd356))
* remove redux-devtools integration ([#151](https://github.com/lacolaco/reactive-store/issues/151)) ([a1d18a2](https://github.com/lacolaco/reactive-store/commit/a1d18a21879628ee3cac840d2f955bbb31a4b029))


### Bug Fixes

* reset() support custom command options ([4d08725](https://github.com/lacolaco/reactive-store/commit/4d087254a6e6872fd00ad60f9d716a2b830720da))

### [3.1.3](https://github.com/lacolaco/reactive-store/compare/v3.1.2...v3.1.3) (2019-09-08)

* Only dependencies update

### [3.1.2](https://github.com/lacolaco/reactive-store/compare/v3.1.1...v3.1.2) (2019-06-26)


### Bug Fixes

* **redux-devtools:** use single devtools connection ([#53](https://github.com/lacolaco/reactive-store/issues/53)) ([59a2a4d](https://github.com/lacolaco/reactive-store/commit/59a2a4d))



### [3.1.1](https://github.com/lacolaco/reactive-store/compare/v3.1.0...v3.1.1) (2019-06-26)


### Bug Fixes

* **redux-devtools:** init devtools on connect ([#52](https://github.com/lacolaco/reactive-store/issues/52)) ([2137b78](https://github.com/lacolaco/reactive-store/commit/2137b78))



## [3.1.0](https://github.com/lacolaco/reactive-store/compare/v3.0.3...v3.1.0) (2019-06-26)


### Features

* add redux devtools integration ([#51](https://github.com/lacolaco/reactive-store/issues/51)) ([4cd5917](https://github.com/lacolaco/reactive-store/commit/4cd5917))


### Deprecations

* `new Store({ onUpdate: () => {...} })` configuration is now deprecated. Use `Store#storeUpdateChanges` instead. 


## [3.0.3](https://github.com/lacolaco/reactive-store/compare/v3.0.2...v3.0.3) (2019-06-24)

## [3.0.2](https://github.com/lacolaco/reactive-store/compare/v3.0.1...v3.0.2) (2019-03-29)



<a name="3.0.1"></a>
## [3.0.1](https://github.com/lacolaco/reactive-store/compare/v3.0.0...v3.0.1) (2019-03-29)



<a name="3.0.0"></a>
# 3.0.0 (2019-03-29)


### Features

* implement v3 ([a39cb97](https://github.com/lacolaco/reactive-store/commit/a39cb97))


### BREAKING CHANGES

All of APIs changed. 

- `Store` is not an Observable now. Use `store.valueChanges` or `store.select()`.
- `.value` instead of `.getValue()`.
- `.update()` instead of `patch()`.
- Middleware system is gone. Only `onChange` event hook is available.

Please read README.md at first.
 

<a name="2.0.1"></a>
## [2.0.1](https://github.com/lacolaco/reactive-store/compare/v2.0.0...v2.0.1) (2018-03-30)


### Bug Fixes

* correct build artifact ([e58a958](https://github.com/lacolaco/reactive-store/commit/e58a958))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/lacolaco/reactive-store/compare/v1.0.0...v2.0.0) (2018-03-29)


### Features

* api-v2 ([db8fa24](https://github.com/lacolaco/reactive-store/commit/db8fa24))
* update Rx to v6 ([c8f9e1a](https://github.com/lacolaco/reactive-store/commit/c8f9e1a))


### BREAKING CHANGES

* - package name -> reactive-store
- dispatch -> patch



<a name="1.0.0"></a>

# 1.0.0 (2018-03-23)

* Moved from https://github.com/lacolaco/ngx/
