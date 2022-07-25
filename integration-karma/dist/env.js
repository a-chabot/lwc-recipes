window.lwcRuntimeFlags = {
    ENABLE_FORCE_NATIVE_SHADOW_MODE_FOR_TEST: false
};
window.process = {
    env: {
        NODE_ENV: 'development',
        COMPAT: false,
        MIXED_SHADOW: false,
        NATIVE_SHADOW: false,
        NATIVE_SHADOW_ROOT_DEFINED: typeof ShadowRoot !== 'undefined',
        SYNTHETIC_SHADOW_ENABLED: true,
        LWC_VERSION: undefined
    }
};
