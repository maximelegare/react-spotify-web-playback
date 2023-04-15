import { ReactNode, PureComponent } from 'react';

type SpotifyPlayerCallback = (token: string) => void;
interface SpotifyAlbum {
    images: SpotifyImage[];
    name: string;
    uri: string;
}
interface SpotifyArtist {
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
    url: string;
}
interface SpotifyDevice {
    id: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number;
}
interface SpotifyImage {
    height: number;
    url: string;
    width: number;
}
interface SpotifyPlayOptions {
    context_uri?: string;
    deviceId: string;
    offset?: number;
    uris?: string[];
}
interface SpotifyPlayerStatus {
    actions: {
        disallows: {
            resuming: boolean;
            skipping_prev: boolean;
        };
    };
    context: null;
    currently_playing_type: string;
    device: SpotifyDevice;
    is_playing: boolean;
    item: {
        album: {
            album_type: string;
            artists: SpotifyArtist[];
            available_markets: string[];
            external_urls: {
                spotify: string;
            };
            href: string;
            id: string;
            images: SpotifyImage[];
            name: string;
            release_date: string;
            release_date_precision: string;
            total_tracks: number;
            type: string;
            uri: string;
        };
        artists: SpotifyArtist[];
        available_markets: string[];
        disc_number: number;
        duration_ms: number;
        explicit: false;
        external_ids: {
            isrc: string;
        };
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        is_local: false;
        name: string;
        popularity: number;
        preview_url: string;
        track_number: number;
        type: string;
        uri: string;
    };
    progress_ms: number;
    repeat_state: string;
    shuffle_state: false;
    timestamp: number;
}
interface SpotifyTrack {
    artists: Pick<SpotifyArtist, 'name' | 'uri' | 'url'>[];
    durationMs: number;
    id: string;
    image: string;
    name: string;
    uri: string;
}
interface WebPlaybackArtist {
    name: string;
    uri: string;
}

declare const ERROR_TYPE: {
    readonly ACCOUNT: "account";
    readonly AUTHENTICATION: "authentication";
    readonly INITIALIZATION: "initialization";
    readonly PLAYBACK: "playback";
    readonly PLAYER: "player";
};
declare const STATUS: {
    readonly ERROR: "ERROR";
    readonly IDLE: "IDLE";
    readonly INITIALIZING: "INITIALIZING";
    readonly READY: "READY";
    readonly RUNNING: "RUNNING";
    readonly UNSUPPORTED: "UNSUPPORTED";
};
declare const TYPE: {
    readonly DEVICE: "device_update";
    readonly FAVORITE: "favorite_update";
    readonly PLAYER: "player_update";
    readonly PROGRESS: "progress_update";
    readonly STATUS: "status_update";
    readonly TRACK: "track_update";
};

type ErrorType = (typeof ERROR_TYPE)[keyof typeof ERROR_TYPE];
type Status = (typeof STATUS)[keyof typeof STATUS];
type Type = (typeof TYPE)[keyof typeof TYPE];
interface CallbackState extends State {
    type: Type;
}
type Layout = 'responsive' | 'compact';
interface Props {
    /**
     * Start the player immediately.
     * @default false
     * @deprecated Most browsers block autoplaying since the user needs to interact with the page first.
     */
    autoPlay?: boolean;
    /**
     * Get status updates from the player.
     */
    callback?: (state: CallbackState) => any;
    /**
     * The callback Spotify SDK uses to get/update the token.
     */
    getOAuthToken?: (callback: (token: string) => void) => Promise<void>;
    /**
     * Hide the Spotify logo.
     * More info: https://developer.spotify.com/documentation/general/design-and-branding/
     * @default false
     */
    hideAttribution?: boolean;
    /**
     * Hide the cover art.
     * @default false
     */
    hideCoverArt?: boolean;
    /**
     * The initial volume for the player. This isn't used for external devices.
     * @default 1
     */
    initialVolume?: number;
    /**
     * Show the volume inline for the "responsive" layout for 768px and above.
     * @default true
     */
    inlineVolume?: boolean;
    /**
     * The layout of the player.
     * @default responsive
     */
    layout?: Layout;
    /**
     * The strings used for aria-label/title attributes.
     */
    locale?: Partial<Locale>;
    /**
     * Magnify the player's slider on hover.
     * @default false
     */
    magnifySliderOnHover?: boolean;
    /**
     * The name of the player.
     * @default Spotify Web Player
     */
    name?: string;
    /**
     * The position of the list/tracks you want to start the player.
     */
    offset?: number;
    /**
     * Save the device selection.
     * @default false
     */
    persistDeviceSelection?: boolean;
    /**
     * Control the player's status.
     */
    play?: boolean;
    /**
     * Triggered when song ends
     *
     */
    setNextSong?: () => any;
    /**
   *
   * Set the volume
   */
    setVolume?: number;
    /**
     * Display a Favorite button. It needs additional scopes in your token.
     * @default false
     */
    showSaveIcon?: boolean;
    /**
     * Customize the player's appearance.
     */
    styles?: StylesProps;
    /**
     * If there are no URIs and an external device is playing, use the external player context.
     *  @default false
     */
    syncExternalDevice?: boolean;
    /**
     * The time in seconds that the player will sync with external devices.
     * @default 5
     */
    syncExternalDeviceInterval?: number;
    /**
     * A Spotify token.
     */
    token: string;
    /**
     * Provide you with a function to sync the track saved status in the player.
     * This works in addition to the showSaveIcon prop, and it is only needed if you keep the track's saved status in your app.
     */
    updateSavedStatus?: (fn: (status: boolean) => any) => any;
    /**
     * A list of Spotify URIs.
    */
    uris: string | string[];
}
interface State {
    currentDeviceId: string;
    deviceId: string;
    devices: SpotifyDevice[];
    error: string;
    errorType: ErrorType | null;
    isActive: boolean;
    isInitializing: boolean;
    isMagnified: boolean;
    isPlaying: boolean;
    isSaved: boolean;
    isUnsupported: boolean;
    needsUpdate: boolean;
    nextTracks: SpotifyTrack[];
    playerPosition: 'bottom' | 'top';
    position: number;
    previousTracks: SpotifyTrack[];
    progressMs: number;
    status: Status;
    track: SpotifyTrack;
    volume: number;
}
interface ComponentsProps {
    [key: string]: any;
    children?: ReactNode;
    styles: StylesOptions;
}
interface Locale {
    currentDevice: string;
    devices: string;
    next: string;
    otherDevices: string;
    pause: string;
    play: string;
    previous: string;
    removeTrack: string;
    saveTrack: string;
    title: string;
    volume: string;
}
interface PlayOptions {
    context_uri?: string;
    uris?: string[];
}
interface StylesOptions {
    activeColor: string;
    altColor: string;
    bgColor: string;
    color: string;
    errorColor: string;
    height: number;
    loaderColor: string;
    loaderSize: number | string;
    sliderColor: string;
    sliderDurationFontFamily?: string;
    sliderDurationFontSize?: string;
    sliderHandleBorderRadius: number | string;
    sliderHandleColor: string;
    sliderHeight: number;
    sliderTrackBorderRadius: number | string;
    sliderTrackColor: string;
    trackArtistColor: string;
    trackNameColor: string;
}
type StylesProps = Partial<StylesOptions>;
interface StyledProps {
    [key: string]: any;
    style: Record<string, any>;
}

declare class SpotifyWebPlayer extends PureComponent<Props, State> {
    private isMounted;
    private emptyTrack;
    private locale;
    private player?;
    private playerProgressInterval?;
    private playerSyncInterval?;
    private ref;
    private renderInlineActions;
    private resizeTimeout?;
    private seekUpdateInterval;
    private styles;
    private syncTimeout?;
    private getPlayOptions;
    constructor(props: Props);
    static defaultProps: {
        autoPlay: boolean;
        initialVolume: number;
        magnifySliderOnHover: boolean;
        name: string;
        persistDeviceSelection: boolean;
        showSaveIcon: boolean;
        syncExternalDeviceInterval: number;
        syncExternalDevice: boolean;
    };
    componentDidMount(): Promise<void>;
    componentDidUpdate(previousProps: Props, previousState: State): Promise<void>;
    componentWillUnmount(): Promise<void>;
    private handleCallback;
    private handleChangeRange;
    private handleClickDevice;
    private handleFavoriteStatusChange;
    private handlePlayerErrors;
    private handlePlayerStateChanges;
    private handlePlayerStatus;
    private handleResize;
    private handleToggleMagnify;
    private get token();
    private initializeDevices;
    private initializePlayer;
    private get isExternalPlayer();
    private setExternalDevice;
    private setVolume;
    private syncDevice;
    private toggleSyncInterval;
    private toggleProgressBar;
    private toggleOffset;
    private togglePlay;
    private updateSeekBar;
    private updateState;
    render(): JSX.Element;
}

export { CallbackState, ComponentsProps, ERROR_TYPE, ErrorType, Layout, Locale, PlayOptions, Props, STATUS, SpotifyAlbum, SpotifyArtist, SpotifyDevice, SpotifyImage, SpotifyPlayOptions, SpotifyPlayerCallback, SpotifyPlayerStatus, SpotifyTrack, State, Status, StyledProps, StylesOptions, StylesProps, TYPE, Type, WebPlaybackArtist, SpotifyWebPlayer as default };
