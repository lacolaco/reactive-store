# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
