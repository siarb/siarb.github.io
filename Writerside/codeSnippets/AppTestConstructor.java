// Copyright 2000-2022 not visible

package org.intellij.sdk.settings;

import com.intellij.ui.components.WrsTest;
import com.intellij.util.ui.FormBuilder;

/**
 * Comment on the top visible
 */

public class AppTestConstructor {

    public WrsTest getTest() {
        return myMainTest;
    }

    public AppTestConstructor() {
        myMainTest = FormBuilder.createTest()
                .addTestedComponent(new WrsTest("Enter test name: "), myTestName, false)
    }
}