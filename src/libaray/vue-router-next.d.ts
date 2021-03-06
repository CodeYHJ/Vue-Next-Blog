// UNPKG
// vue-router/dist/vue-router.d.ts
// Version: 

// 16.2 kB
// TypeScript
// View Raw
import { App } from 'vue';
import { Component } from 'vue';
import { ComponentPublicInstance } from 'vue';
import { ComputedRef } from 'vue';
import { Ref } from 'vue';

declare type Awaitable<T> = T | Promise<T>;

/**
 * Creates a in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location.
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */
export declare function createMemoryHistory(base?: string): RouterHistory;

export declare function createRouter({ history, routes, scrollBehavior, parseQuery, stringifyQuery, }: RouterOptions): Router;

export declare function createWebHashHistory(base?: string): RouterHistory;

export declare function createWebHistory(base?: string): RouterHistory;

/**
 * Internal type to define an ErrorHandler
 * @internal
 */
export declare type ErrorHandler = (error: any) => any;

declare const enum ErrorTypes {
    MATCHER_NOT_FOUND = 0,
    NAVIGATION_GUARD_REDIRECT = 1,
    NAVIGATION_ABORTED = 2,
    NAVIGATION_CANCELLED = 3
}

declare interface HistoryLocation {
    fullPath: string;
    state?: HistoryState;
}

declare type HistoryLocationNormalized = Pick<HistoryLocation, 'fullPath'>;

declare interface HistoryState {
    [x: number]: HistoryStateValue;
    [x: string]: HistoryStateValue;
}

declare interface HistoryStateArray extends Array<HistoryStateValue> {
}

declare type HistoryStateValue = string | number | boolean | null | HistoryState | HistoryStateArray;

declare type Lazy<T> = () => Promise<T>;

export declare const Link: Component;

declare interface LinkProps {
    to: RouteLocationRaw;
    replace?: boolean;
}

declare interface LocationAsName {
    name: RouteRecordName;
    params?: RouteParamsRaw;
}

declare interface LocationAsPath {
    path: string;
}

declare interface LocationAsRelative {
    params?: RouteParamsRaw;
}

/**
 * Normalized query object that appears in {@link RouteLocationNormalized}
 *
 * @public
 */
export declare type LocationQuery = Record<string, LocationQueryValue | LocationQueryValue[]>;

/**
 * Loose {@link LocationQuery} object that can be passed to functions like
 * {@link Router.push} and {@link Router.replace} or anywhere when creating a
 * {@link RouteLocationRaw}
 *
 * @public
 */
export declare type LocationQueryRaw = Record<string | number, LocationQueryValueRaw | LocationQueryValueRaw[]>;

/**
 * Possible values in normalized {@link LocationQuery}
 *
 * @internal
 */
export declare type LocationQueryValue = string | null;

/**
 * Possible values when defining a query
 *
 * @internal
 */
declare type LocationQueryValueRaw = LocationQueryValue | number | undefined;

declare interface NavigationCallback {
    (to: HistoryLocationNormalized, from: HistoryLocationNormalized, information: NavigationInformation): void;
}

declare enum NavigationDirection {
    back = "back",
    forward = "forward",
    unknown = ""
}

export declare interface NavigationFailure extends RouterErrorBase {
    type: ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_CANCELLED;
    from: RouteLocationNormalized;
    to: RouteLocationNormalized;
}

export declare enum NavigationFailureType {
    cancelled = 3,
    aborted = 2
}

export declare interface NavigationGuard {
    (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardCallback): any;
}

declare interface NavigationGuardCallback {
    (): void;
    (error: Error): void;
    (location: RouteLocationRaw): void;
    (valid: boolean): void;
    (cb: NavigationGuardNextCallback): void;
}

declare type NavigationGuardNextCallback = (vm: any) => any;

declare interface NavigationGuardWithThis<T> {
    (this: T, to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardCallback): any;
}

declare interface NavigationInformation {
    type: NavigationType_2;
    direction: NavigationDirection;
    distance: number;
}

declare enum NavigationType_2 {
    pop = "pop",
    push = "push"
}

export declare function onBeforeRouteLeave(leaveGuard: NavigationGuard): void;

/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams
 *
 * @param search - search string to parse
 * @returns a query object
 */
export declare function parseQuery(search: string): LocationQuery;

declare interface PathParserOptions {
    /**
     * Makes the RegExp case sensitive. Defaults to false
     */
    sensitive?: boolean;
    /**
     * Should we allow a trailing slash. Defaults to true
     */
    strict?: boolean;
    /**
     * Should the RegExp match from the beginning by prepending a ^. Defaults to true
     */
    start?: boolean;
    /**
     * Should the RegExp match until the end by appending a $. Defaults to true
     */
    end?: boolean;
}

export declare interface PostNavigationGuard {
    (to: RouteLocationNormalized, from: RouteLocationNormalized, failure?: TODO): any;
}

declare type RawHistoryLocation = HistoryLocation | string;

declare type RawRouteComponent = RouteComponent | Lazy<RouteComponent>;

declare type RouteComponent = Component;

/**
 * {@link RouteLocationRaw} resolved using the matcher
 */
declare interface RouteLocation extends _RouteLocationBase {
    /**
     * Array of {@link RouteRecord} containing components as they were
     * passed when adding records. It can also contain redirect records. This
     * can't be used directly
     */
    matched: RouteRecord[];
}

/**
 * Base properties for a normalized route location.
 *
 * @internal
 */
declare interface _RouteLocationBase {
    path: string;
    fullPath: string;
    query: LocationQuery;
    hash: string;
    name: RouteRecordName | null | undefined;
    params: RouteParams;
    redirectedFrom: RouteLocation | undefined;
    meta: Record<string | number | symbol, any>;
}

export declare interface RouteLocationMatched extends RouteRecordNormalized {
    components: Record<string, RouteComponent>;
}

/**
 * Similar to {@link RouteLocation} but its
 * {@link RouteLocationNormalized.matched} cannot contain redirect records
 */
export declare interface RouteLocationNormalized extends _RouteLocationBase {
    /**
     * Array of {@link RouteRecordNormalized}
     */
    matched: RouteRecordNormalized[];
}

/**
 * {@link RouteLocationRaw} with
 */
export declare interface RouteLocationNormalizedLoaded extends _RouteLocationBase {
    /**
     * Array of {@link RouteLocationMatched} containing only plain components (any
     * lazy-loaded components have been loaded and were replaced inside of the
     * `components` object) so it can be directly used to display routes. It
     * cannot contain redirect records either
     */
    matched: RouteLocationMatched[];
}

export declare interface RouteLocationOptions {
    /**
     * Replace the entry in the history instead of pushing a new entry
     */
    replace?: boolean;
    /**
     * Triggers the navigation even if the location is the same as the current one
     */
    force?: boolean;
    /**
     * State to save using the History API. This cannot contain any reactive values and some primitives like Symbols are forbidden. More info at TODO: link mdn
     */
    state?: HistoryState;
}

/**
 * User-level route location
 */
export declare type RouteLocationRaw = string | (RouteQueryAndHash & LocationAsPath & RouteLocationOptions) | (RouteQueryAndHash & LocationAsName & RouteLocationOptions) | (RouteQueryAndHash & LocationAsRelative & RouteLocationOptions);

export declare type RouteParams = Record<string, RouteParamValue | RouteParamValue[]>;

declare type RouteParamsRaw = RouteParams;

declare type RouteParamValue = string;

declare interface RouteQueryAndHash {
    query?: LocationQueryRaw;
    hash?: string;
}

export declare interface Router {
    readonly history: RouterHistory;
    readonly currentRoute: Ref<RouteLocationNormalizedLoaded>;
    addRoute(parentName: RouteRecordName, route: RouteRecordRaw): () => void;
    addRoute(route: RouteRecordRaw): () => void;
    removeRoute(name: RouteRecordName): void;
    hasRoute(name: RouteRecordName): boolean;
    getRoutes(): RouteRecord[];
    resolve(to: RouteLocationRaw): RouteLocation & {
        href: string;
    };
    push(to: RouteLocationRaw): Promise<NavigationFailure | void>;
    replace(to: RouteLocationRaw): Promise<NavigationFailure | void>;
    beforeEach(guard: NavigationGuardWithThis<undefined>): () => void;
    afterEach(guard: PostNavigationGuard): () => void;
    onError(handler: ErrorHandler): () => void;
    isReady(): Promise<void>;
    install(app: App): void;
}

export declare type RouteRecord = RouteRecordNormalized | RouteRecordRedirect;

/**
 * Common properties among all kind of {@link RouteRecordRaw}
 */
declare interface _RouteRecordBase {
    /**
     * Path of the record. Should start with `/` unless the record is the child of
     * another record.
     */
    path: string;
    /**
     * Aliases for the record. Allows defining extra paths that will behave like a
     * copy of the record. Allows having paths shorthands like `/users/:id` and
     * `/u/:id`. All `alias` and `path` values must share the same params.
     */
    alias?: string | string[];
    /**
     * Name for the route record.
     */
    name?: RouteRecordName;
    /**
     * Allow passing down params as props to the component rendered by `router-view`.
     */
    props?: boolean | Record<string, any> | ((to: RouteLocationNormalized) => Record<string, any>);
    beforeEnter?: NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[];
    /**
     * Arbitrary data attached to the record.
     */
    meta?: Record<string | number | symbol, any>;
    options?: PathParserOptions;
}

declare interface RouteRecordMultipleViews extends _RouteRecordBase {
    components: Record<string, RawRouteComponent>;
    children?: RouteRecordRaw[];
}

declare type RouteRecordName = string | symbol;

export declare interface RouteRecordNormalized {
    path: RouteRecordMultipleViews['path'];
    name: RouteRecordMultipleViews['name'];
    components: RouteRecordMultipleViews['components'];
    children: Exclude<RouteRecordMultipleViews['children'], void>;
    meta: Exclude<RouteRecordMultipleViews['meta'], void>;
    props: Exclude<_RouteRecordBase['props'], void>;
    beforeEnter: RouteRecordMultipleViews['beforeEnter'];
    leaveGuards: NavigationGuard[];
    instances: Record<string, ComponentPublicInstance | undefined | null>;
    aliasOf: RouteRecordNormalized | undefined;
}

export declare type RouteRecordRaw = RouteRecordSingleView | RouteRecordMultipleViews | RouteRecordRedirectRaw;

declare interface RouteRecordRedirect {
    path: RouteRecordMultipleViews['path'];
    name: RouteRecordMultipleViews['name'];
    redirect: RouteRecordRedirectRaw['redirect'];
    aliasOf: RouteRecordRedirect | undefined;
    meta: Exclude<RouteRecordMultipleViews['meta'], void>;
    components: RouteRecordMultipleViews['components'];
}

declare type RouteRecordRedirectOption = RouteLocationRaw | ((to: RouteLocation) => RouteLocationRaw);

declare interface RouteRecordRedirectRaw extends _RouteRecordBase {
    redirect: RouteRecordRedirectOption;
    beforeEnter?: never;
    component?: never;
    components?: never;
}

declare interface RouteRecordSingleView extends _RouteRecordBase {
    component: RawRouteComponent;
    children?: RouteRecordRaw[];
}

declare interface RouterErrorBase extends Error {
    type: ErrorTypes;
}

/**
 * Interface implemented by History implementations that can be passed to the
 * router as {@link Router.history}
 *
 * @alpha
 */
export declare interface RouterHistory {
    /**
     * Base path that is prepended to every url. This allows hosting an SPA at a
     * subfolder of a domain like `example.com/subfolder` by having a `base` of
     * `/subfolder`
     */
    readonly base: string;
    /**
     * Current History location
     */
    readonly location: HistoryLocationNormalized;
    /**
     * Current History state
     */
    readonly state: HistoryState;
    /**
     * Navigates to a location. In the case of an HTML5 History implementation,
     * this will call `history.pushState` to effectively change the URL.
     *
     * @param to - location to push
     * @param data - optional {@link HistoryState} to be associated with the
     * navigation entry
     */
    push(to: RawHistoryLocation, data?: HistoryState): void;
    /**
     * Same as {@link RouterHistory.push} but performs a `history.replaceState`
     * instead of `history.pushState`
     *
     * @param to - location to set
     * @param data - optional {@link HistoryState} to be associated with the
     * navigation entry
     */
    replace(to: RawHistoryLocation, data?: HistoryState): void;
    /**
     * Traverses history in a given direction.
     *
     * @example
     * ```js
     * myHistory.go(-1) // equivalent to window.history.back()
     * myHistory.go(1) // equivalent to window.history.forward()
     * ```
     *
     * @param distance - distance to travel. If distance is \< 0, it will go back,
     * if it's \> 0, it will go forward
     * @param triggerListeners - whether this should trigger listeners attached to
     * the history
     */
    go(distance: number, triggerListeners?: boolean): void;
    /**
     * Attach a listener to the History implementation that is triggered when the
     * navigation is triggered from outside (like the Browser back and forward
     * buttons) or when passing `true` to {@link RouterHistory.back} and
     * {@link RouterHistory.forward}
     *
     * @param callback - listener to attach
     * @returns a callback to remove the listener
     */
    listen(callback: NavigationCallback): () => void;
    destroy(): void;
}

export declare interface RouterOptions {
    history: RouterHistory;
    routes: RouteRecordRaw[];
    scrollBehavior?: ScrollBehavior_2;
    parseQuery?: typeof parseQuery;
    stringifyQuery?: typeof stringifyQuery;
}

declare interface ScrollBehavior_2 {
    (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, savedPosition: ScrollToPosition | null): Awaitable<ScrollPosition | false | void>;
}
export { ScrollBehavior_2 as ScrollBehavior }

declare type ScrollPosition = ScrollToPosition | ScrollToElement;

declare interface ScrollToElement {
    selector: string;
    offset?: ScrollToPosition;
}

declare type ScrollToPosition = {
    x: number;
    y: number;
};

export declare const START_LOCATION: RouteLocationNormalizedLoaded;

/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */
export declare function stringifyQuery(query: LocationQueryRaw): string;

declare type TODO = any;

export declare function useLink(props: UseLinkOptions): {
    route: import("vue").ComputedRef<RouteLocation & {
        href: string;
    }>;
    href: import("vue").ComputedRef<string>;
    isActive: import("vue").ComputedRef<boolean>;
    isExactActive: import("vue").ComputedRef<boolean>;
    navigate: (e?: MouseEvent) => void;
};

declare type UseLinkOptions = VueUseOptions<LinkProps>;

export declare function useRoute(): RouteLocationNormalizedLoaded;

export declare function useRouter(): Router;

export declare const View: Component;

declare type VueUseOptions<T> = {
    [k in keyof T]: Ref<T[k]> | T[k] | ComputedRef<T[k]>;
};

export { }