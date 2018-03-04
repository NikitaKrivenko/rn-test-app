package com.testapp;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.List;

public class MainApplication extends NavigationApplication {
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    public List<ReactPackage> createAdditionalReactPackages() {
        return null;
    }

    @Nullable
    public String getJSMainModuleName() {
        return "index";
    }
}