package autometrica.autometrica.views;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import autometrica.autometrica.R;
import autometrica.autometrica.api.ApiManager;

/**
 * Created by david_000 on 3/20/2016.
 */
public class RateActivity extends AppCompatActivity {

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_rate);

        //Configure API Manager to send data to database.
        final ApiManager apiManager = new ApiManager(this);

        Button option1 = (Button)findViewById(R.id.option_1);
        Button option2 = (Button)findViewById(R.id.option_2);
        Button option3 = (Button)findViewById(R.id.option_3);
        Button option4 = (Button)findViewById(R.id.option_4);
        Button option5 = (Button)findViewById(R.id.option_5);

        option1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                apiManager.sendData("1");
            }
        });

        option2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                apiManager.sendData("2");
            }
        });

        option3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                apiManager.sendData("3");
            }
        });

        option4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                apiManager.sendData("4");
            }
        });

        option5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                apiManager.sendData("5");
            }
        });

    }
}
