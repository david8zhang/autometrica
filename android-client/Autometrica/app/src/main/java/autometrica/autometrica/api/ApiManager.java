package autometrica.autometrica.api;

import android.content.Context;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;

import java.util.HashMap;
import java.util.Map;

import autometrica.autometrica.controller.AppController;
import autometrica.autometrica.models.Constants;
import cn.pedant.SweetAlert.SweetAlertDialog;

/**
 * Created by david_000 on 3/6/2016.
 */
public class ApiManager {

    private Context context;

    public ApiManager(Context context) {
        this.context = context;
    }

    /** Send a new data entry to the server. */
    public void sendData(final String scale) {
        final StringRequest request = new StringRequest(Request.Method.POST, Constants.CREATE_DATA,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String s) {
                        System.out.println(s);
                        new SweetAlertDialog(context, SweetAlertDialog.SUCCESS_TYPE)
                                .setTitleText("Success!")
                                .setConfirmText("Click to exit!")
                                .setConfirmClickListener(new SweetAlertDialog.OnSweetClickListener() {
                                    @Override
                                    public void onClick(SweetAlertDialog sweetAlertDialog) {
                                        System.exit(0);
                                    }
                                }).show();
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError volleyError) {
                System.out.println(volleyError);
            }
        }) {
            @Override
            protected Map<String, String> getParams() {
                Map<String, String> params = new HashMap<>();
                params.put("scale", scale);
                return params;
            }

            @Override
            public Map<String, String> getHeaders() {
                Map<String, String> headers = new HashMap<>();
                headers.put("Content-Type", "application/x-www-form-urlencoded");
                return headers;
            }
        };
        AppController.getInstance().addToRequestQueue(request);
    }
}
