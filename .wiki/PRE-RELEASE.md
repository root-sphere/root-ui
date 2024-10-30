# Pre-release

Pre-release version은 `changeset`을 이용하여 관리합니다.

아래 사항을 읽어보시기 바랍니다. <br/>
일반적으로, 3 ~ 5번까지의 과정은 publish-package.yml을 통해서 진행되는 것이 가장 좋은 프로세스입니다.

## Generate pre release version

- [Changeset Pre-release](https://github.com/changesets/changesets/blob/main/docs/prereleases.md)

### 1. Enter pre-release version

pre-release는 일반적으로 `alpha`, `beta`, `rc` 등을 사용하여 버전을 관리합니다.

```sh
pnpm changeset pre enter alpha # run only once
```

### 2. Develop feature and commit

이 프로세스는 일반적인 개발 프로세스와 동일합니다. <br/>
기능을 개발하고 테스트, 린트, 타입 체크를 포함하여 변경 사항을 커밋해야 합니다.

### 3. Add pre-release version and publish

어떤 패키지를 배포할지 선택하고 버전과 변경 사항을 추가합니다.

```sh
pnpm run changeset:add
```

### 4. Versioning and commit

3번에서 추가된 버전으로 패키지를 업데이트하고 커밋합니다.

```sh
pnpm run changeset:version
pnpm i # To update pre-release version in the package.json for lockfile
git add .
git commit -m "chore: add pre-release version"
```

### 5. Publish pre-release version

4번에서 추가된 버전을 배포합니다.

```sh
# if you want to publish the pre-release version
pnpm run build
pnpm changeset:publish
```

### 6. Exit pre-release version

> pre-release가 종료되면 official version으로 변경됨을 주의해야 합니다.

```sh
# if you want to exit the pre-release version
pnpm changeset pre exit
pnpm run changeset:version
pnpm i # To update pre-release version in the package.json for lockfile
git add .
git commit -m "chore: exit pre-release version"
```
