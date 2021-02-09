package com.investecassessment;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.os.Build;

public class EmulatorTestModule extends ReactContextBaseJavaModule {
    //constructor
    public EmulatorTestModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    //Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "EmulatorTestModule";
    }

    //Custom function that we are going to export to JS
    @ReactMethod(isBlockingSynchronousMethod = true)
    public Boolean isEmulator() {
        String product = Build.PRODUCT;

        if (product != null) {
          return product.equals("sdk") || product.contains("_sdk") || product.contains("sdk_");
        }
        return false;
    }
}
